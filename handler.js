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
  request.get('https://github.com/phodal/serverless-hexo-blog-static-files/archive/master.zip')
    .pipe(fs.createWriteStream('/tmp/blog.zip'))
    .on('close', (repo) => {
      fs.createReadStream('/tmp/blog.zip')
        .pipe(unzip.Extract({path: '/tmp/'}))
        .on('close', function () {
          console.log(repo);
          console.info(`Download https://github.com/phodal/serverless-hexo-blog-static-files`);
          var hexo = new Hexo("/tmp/serverless-hexo-blog-static-files-master", {
            config_path: '/tmp/serverless-hexo-blog-static-files-master/_config.yml'
          });

          hexo.loadPlugin(require.resolve('hexo-renderer-ejs'))
          hexo.loadPlugin(require.resolve('hexo-renderer-marked'))
          hexo.loadPlugin(require.resolve('hexo-renderer-stylus'))
          hexo.loadPlugin(require.resolve('hexo-generator-tag'))
          hexo.loadPlugin(require.resolve('hexo-generator-index'))
          hexo.loadPlugin(require.resolve('hexo-generator-category'))
          hexo.loadPlugin(require.resolve('hexo-generator-archive'))

          hexo.init().then(() => {
            console.info("Running Hexo Generate");
            hexo.call("generate", {})
              .then(() => {
                console.info(`Hexo done`);
                // resolve full folder path
                var walker  = walk.walk('/tmp/serverless-hexo-blog-static-files-master/public', { followLinks: false });
                walker.on('file', function(root, stat, next) {
                  let filePath = root.toString().substring('/tmp/serverless-hexo-blog-static-files-master/public'.length + 1);
                  let fileName = stat.name;
                  fs.readFile(path.join(root, stat.name), (error, fileContent) => {
                    if (error) {
                      throw error;
                    }
                    S3.putObject({
                      Bucket: 'static.wdsm.io',
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
