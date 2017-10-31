"use strict";

const fs = require("fs"); // from node.js
const path = require("path"); // from node.js
const Hexo = require("hexo");
const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('./s3config.js')())

exports.create = (event, context, callback) => {
  var Git = require("nodegit");

  Git.Clone('https://github.com/phodal/serverless-hexo-blog-static-files', "tmp/src", {})
    .then((repo) => {
      console.info(`Checking out https://github.com/phodal/serverless-hexo-blog-static-files`);
      var hexo = new Hexo("tmp/src", {});
      hexo.init().then(() => {
        console.info("Running Hexo Generate");
        hexo.call("generate", {})
          .then(() => {
            console.info(`Hexo done`);
            // resolve full folder path
            const distFolderPath = path.join(__dirname, "tmp/src");
            fs.readdir(distFolderPath, (err, files) => {
              if (!files || files.length === 0) {
                console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
                console.log('Make sure your project was compiled!');
                return callback(repo, {
                  statusCode: 500,
                  body: JSON.stringify({
                    message: `文件异常 ${distFolderPath}`,
                    input: event,
                  })
                });
              }

              for (const fileName of files) {
                const filePath = path.join(distFolderPath, fileName);
                if (fs.lstatSync(filePath).isDirectory()) {
                  continue;
                }

                fs.readFile(filePath, (error, fileContent) => {
                  if (error) {
                    throw error;
                  }
                  S3.putObject({
                    Bucket: 'static.wdsm.io',
                    Key: fileName,
                    Body: fileContent
                  }, (res) => {
                    console.log(`Successfully uploaded '${fileName}'!`);
                  });
                });
              }
            });

            hexo.exit();
            callback(repo, {
              statusCode: 200,
              body: JSON.stringify({
                message: '成功',
                input: event,
              })
            });
          })
          .catch(() => {
            hexo.exit();
            callback(repo, {
              statusCode: 500,
              body: JSON.stringify({
                message: 'Hexo 异常',
                input: event,
              })
            });
          });
      });
    })
    .catch((repo) => {
      callback(repo, {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Git 初始化错误',
          input: event,
        })
      });
    });
};
