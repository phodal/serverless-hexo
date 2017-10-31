Serverless Hexo
===

```
START RequestId: c06f499c-be4c-11e7-a876-f347c418c319 Version: $LATEST
2017-10-31 23:04:14.088 (+08:00)	c06f499c-be4c-11e7-a876-f347c418c319	Error: /var/task/node_modules/nodegit/build/Release/nodegit.node: invalid ELF header
    at Error (native)
    at Object.Module._extensions..node (module.js:597:18)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/var/task/node_modules/nodegit/dist/nodegit.js:11:12)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at exports.create (/var/task/handler.js:11:13)
END RequestId: c06f499c-be4c-11e7-a876-f347c418c319
REPORT RequestId: c06f499c-be4c-11e7-a876-f347c418c319	Duration: 50.68 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 58 MB

RequestId: c06f499c-be4c-11e7-a876-f347c418c319 Process exited before completing request

START RequestId: 4a60fa09-be50-11e7-8e87-43696e42b2d8 Version: $LATEST
2017-10-31 23:29:33.076 (+08:00)	4a60fa09-be50-11e7-8e87-43696e42b2d8	error Error: EROFS: read-only file system, open 'blog.zip'
END RequestId: 4a60fa09-be50-11e7-8e87-43696e42b2d8
REPORT RequestId: 4a60fa09-be50-11e7-8e87-43696e42b2d8	Duration: 300.15 ms	Billed Duration: 400 ms 	Memory Size: 1024 MB	Max Memory Used: 64 MB

START RequestId: ffde76bd-be50-11e7-bf83-25cbc8dc7e2c Version: $LATEST
2017-10-31 23:34:38.337 (+08:00)	ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	undefined
2017-10-31 23:34:38.338 (+08:00)	ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	Download https://github.com/phodal/serverless-hexo-blog-static-files
2017-10-31 23:34:38.518 (+08:00)	ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	Running Hexo Generate
INFO  Start processing
INFO  Files loaded in 361 ms
INFO  Generated: css/style.styl
INFO  Generated: fancybox/blank.gif
INFO  Generated: fancybox/fancybox_loading.gif
INFO  Generated: fancybox/fancybox_loading@2x.gif
INFO  Generated: fancybox/fancybox_sprite.png
INFO  Generated: css/fonts/FontAwesome.otf
INFO  Generated: fancybox/helpers/fancybox_buttons.png
INFO  Generated: fancybox/jquery.fancybox.css
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.js
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.css
INFO  Generated: fancybox/fancybox_sprite@2x.png
INFO  Generated: fancybox/fancybox_overlay.png
INFO  Generated: css/fonts/fontawesome-webfont.eot
INFO  Generated: css/fonts/fontawesome-webfont.woff
INFO  Generated: fancybox/helpers/jquery.fancybox-media.js
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.css
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.js
INFO  Generated: fancybox/jquery.fancybox.js
INFO  Generated: fancybox/jquery.fancybox.pack.js
INFO  Generated: css/fonts/fontawesome-webfont.svg
INFO  Generated: css/fonts/fontawesome-webfont.ttf
INFO  Generated: js/script.js
INFO  Generated: css/images/banner.jpg
INFO  23 files generated in 78 ms
2017-10-31 23:34:38.959 (+08:00)	ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	Hexo done
2017-10-31 23:34:38.997 (+08:00)	ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	provided folder '/var/task/tmp/serverless-hexo-blog-static-files-master/public' is empty or does not exist.
2017-10-31 23:34:38.997 (+08:00)	ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	Make sure your project was compiled!
END RequestId: ffde76bd-be50-11e7-bf83-25cbc8dc7e2c
REPORT RequestId: ffde76bd-be50-11e7-bf83-25cbc8dc7e2c	Duration: 1472.63 ms	Billed Duration: 1500 ms 	Memory Size: 1024 MB	Max Memory Used: 106 MB
```
