"use strict";

const fs = require("fs"); // from node.js
const path = require("path"); // from node.js
const Hexo = require("hexo");
const AWS = require('aws-sdk')
const request = require("request");
const unzip = require("unzip");
const S3 = new AWS.S3(require('./s3config.js')())

let create = (event, context, callback) => {
  request.get('https://github.com/phodal/serverless-hexo-blog-static-files/archive/master.zip')
    .pipe(fs.createWriteStream('blog.zip'))
    .on('close', (repo) => {
      fs.createReadStream('blog.zip')
        .pipe(unzip.Extract({path: 'tmp/'}))
        .on('close', function () {
          console.log(repo);
          console.info(`Download https://github.com/phodal/serverless-hexo-blog-static-files`);
          var hexo = new Hexo("tmp/serverless-hexo-blog-static-files-master", {});
          hexo.init().then(() => {
            console.info("Running Hexo Generate");
            hexo.call("generate", {})
              .then(() => {
                console.info(`Hexo done`);
                // resolve full folder path
                const distFolderPath = path.join(__dirname, "tmp/serverless-hexo-blog-static-files-master/public");
                fs.readdir(distFolderPath, (err, files) => {
                  if (!files || files.length === 0) {
                    console.log(`provided folder '${distFolderPath}' is empty or does not exist.`);
                    console.log('Make sure your project was compiled!');
                    return callback(null, {
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
                callback(null, {
                  statusCode: 200,
                  body: JSON.stringify({
                    message: '成功',
                    input: event,
                  })
                });
              })
              .catch(() => {
                console.log(`error Hexo 异常: ${repo}`);
                hexo.exit();
                callback(null, {
                  statusCode: 500,
                  body: JSON.stringify({
                    message: 'Hexo 异常',
                    input: event,
                  })
                });
              });
          });
        })
    })
    .on('error', (repo) => {
      console.log(`error ${repo}`);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Fetch 错误' + repo,
          input: event,
        })
      });
    });
};


// create();

exports.create = create;
