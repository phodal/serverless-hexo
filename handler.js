"use strict";

const fs = require("fs"); // from node.js
const path = require("path"); // from node.js
const Hexo = require("hexo");
const AWS = require('aws-sdk');
const request = require("request");
const unzip = require("unzip");
const S3 = new AWS.S3(require('./s3config.js')());
const walk = require('walk');

let create = (event, context, callback) => {
  let repoAddress = 'https://github.com/phodal/serverless-hexo-blog-static-files';
  let tmpPath = 'tmp/';
  let blogZipFile = tmpPath + 'blog.zip';
  let repoUnzipPath = `${tmpPath}/serverless-hexo-blog-static-files-master`;
  let bucketName = 'static.wdsm.io';

  request.get(`${repoAddress}/archive/master.zip`)
    .pipe(fs.createWriteStream(blogZipFile))
    .on('close', (repo) => {
    fs.createReadStream(blogZipFile)
        .pipe(unzip.Extract({path: tmpPath}))
        .on('close', function () {
          console.info(`Downloaded ${repoAddress}`);
          var hexo = new Hexo(repoUnzipPath, {
            config_path: `${repoUnzipPath}/_config.yml`
          });

          hexo.loadPlugin(require.resolve('hexo-generator-archive'));
          hexo.loadPlugin(require.resolve('hexo-generator-category'));
          hexo.loadPlugin(require.resolve('hexo-generator-index'));
          hexo.loadPlugin(require.resolve('hexo-generator-tag'));
          hexo.loadPlugin(require.resolve('hexo-renderer-ejs'));
          hexo.loadPlugin(require.resolve('hexo-renderer-marked'));
          hexo.loadPlugin(require.resolve('hexo-renderer-stylus'));

          hexo.init().then(() => {
            console.info("Running Hexo Generate");
            hexo.call("generate", {force: true})
              .then(() => {
                console.info(`Hexo done`);
                hexo.exit();

                var walker  = walk.walk(`${repoUnzipPath}/public`, { followLinks: false });
                walker.on('file', function(root, stat, next) {
                  let filePath = root.toString().substring(`${repoUnzipPath}/public`.length + 1);
                  let fileName = stat.name;
                  fs.readFile(path.join(root, stat.name), (error, fileContent) => {
                    if (error) {
                      throw error;
                    }
                    S3.putObject({
                      Bucket: bucketName,
                      Key: path.join(filePath, fileName),
                      Body: fileContent
                    }, (res) => {
                      console.log(res);
                      console.log(`Successfully uploaded '${fileName}'!`);
                    });
                  });
                  next();
                });

                walker.on('end', function() {
                  hexo.exit();
                  callback(null, {
                    statusCode: 201,
                    body: JSON.stringify({
                      message: '创建成功',
                      input: event,
                    })
                  });
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
