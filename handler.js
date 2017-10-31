"use strict";

const Hexo = require("hexo");
const AWS = require('aws-sdk')
const S3 = new AWS.S3(require('./s3config.js')())

exports.handler = (event,context,callback) => {

  var Git = require("nodegit");

  Git.Clone('https://github.com/phodal/serverless-hexo-blog-static-files', "tmp/src", {})
    .then( (repo) => {
      console.info(`Checking out https://github.com/phodal/serverless-hexo-blog-static-files`);
      var hexo = new Hexo("tmp/src", {});
      hexo.init().then( () => {
        console.info("Running Hexo Generate");
        hexo.call("generate",{})
          .then( () => {
            console.info(`Hexo done`);
            return hexo.exit();
          })
          .catch( () => {
            console.info(`Hexo done`);
            return hexo.exit();
          });
      });

    })
    .catch( (repo) => {
      //console.info("Error",repo);
      callback(repo);
    });
};
