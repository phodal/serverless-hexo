Serverless Hexo
===

[Serverless 应用开发指南：使用 Lambda 构建 Hexo 静态网站](https://www.phodal.com/blog/serverless-development-guide-hexo-static-website-generate-in-cloud/)

install
---

clone

```
serverless install -u https://github.com/phodal/serverless-hexo -n serverless hexo
```

run

```
yarn install
```

env
---

change in ``serverless.yml``:
  
```
    environment:
      USER_NAME: phodal
      REPO_NAME: serverless-hexo-blog-static-files
      BUCKET_NAME: static.wdsm.io
```

deploy
---

```
serverless deploy
```


```
..............
Serverless: Stack update finished...
Service Information
service: serverless-hexo
stage: dev
region: us-east-1
stack: serverless-hexo-dev
api keys:
  None
endpoints:
  GET - https://jf1audrhvg.execute-api.us-east-1.amazonaws.com/dev/create
functions:
  create: serverless-hexo-dev-create
Serverless: Removing old service versions...
```

trigger
---


```
curl https://jf1audrhvg.execute-api.us-east-1.amazonaws.com/dev/create
```

logs
---

```
serverless logs -f create -t
```

example

```

START RequestId: d9ae1913-bed0-11e7-bdca-19fc04634b74 Version: $LATEST
2017-11-01 14:49:50.048 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	undefined
2017-11-01 14:49:50.049 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Download https://github.com/phodal/serverless-hexo-blog-static-files
2017-11-01 14:49:50.264 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Running Hexo Generate
INFO  Start processing
INFO  Files loaded in 618 ms
INFO  Generated: index.html
INFO  Generated: archives/index.html
INFO  Generated: fancybox/blank.gif
INFO  Generated: fancybox/jquery.fancybox.css
INFO  Generated: fancybox/jquery.fancybox.pack.js
INFO  Generated: fancybox/jquery.fancybox.js
INFO  Generated: fancybox/fancybox_loading.gif
INFO  Generated: fancybox/fancybox_loading@2x.gif
INFO  Generated: fancybox/fancybox_overlay.png
INFO  Generated: fancybox/fancybox_sprite.png
INFO  Generated: fancybox/fancybox_sprite@2x.png
INFO  Generated: archives/2017/11/index.html
INFO  Generated: css/style.css
INFO  Generated: css/fonts/FontAwesome.otf
INFO  Generated: fancybox/helpers/fancybox_buttons.png
INFO  Generated: archives/2017/index.html
INFO  Generated: css/fonts/fontawesome-webfont.eot
INFO  Generated: css/fonts/fontawesome-webfont.woff
INFO  Generated: js/script.js
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.css
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.js
INFO  Generated: fancybox/helpers/jquery.fancybox-media.js
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.css
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.js
INFO  Generated: css/images/banner.jpg
INFO  Generated: css/fonts/fontawesome-webfont.svg
INFO  Generated: css/fonts/fontawesome-webfont.ttf
INFO  Generated: 2017/11/01/hello-world/index.html
INFO  28 files generated in 1.9 s
2017-11-01 14:49:52.780 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Hexo done
2017-11-01 14:49:52.861 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.861 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'blank.gif'!
2017-11-01 14:49:52.861 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.861 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'index.html'!
2017-11-01 14:49:52.867 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.879 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'script.js'!
2017-11-01 14:49:52.880 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.880 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fancybox_loading.gif'!
2017-11-01 14:49:52.880 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.880 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fancybox_loading@2x.gif'!
2017-11-01 14:49:52.902 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.902 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fancybox_sprite.png'!
2017-11-01 14:49:52.902 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.902 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox.js'!
2017-11-01 14:49:52.903 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.903 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fancybox_buttons.png'!
2017-11-01 14:49:52.903 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.903 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fancybox_sprite@2x.png'!
2017-11-01 14:49:52.903 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.903 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox.pack.js'!
2017-11-01 14:49:52.920 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.921 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox-thumbs.js'!
2017-11-01 14:49:52.924 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.924 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox-buttons.css'!
2017-11-01 14:49:52.924 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.924 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox-thumbs.css'!
2017-11-01 14:49:52.926 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.926 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'style.css'!
2017-11-01 14:49:52.926 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.926 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox-media.js'!
2017-11-01 14:49:52.930 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.930 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox-buttons.js'!
2017-11-01 14:49:52.947 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.947 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'jquery.fancybox.css'!
2017-11-01 14:49:52.947 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.947 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fontawesome-webfont.eot'!
2017-11-01 14:49:52.949 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.949 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'FontAwesome.otf'!
2017-11-01 14:49:52.962 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.962 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fancybox_overlay.png'!
2017-11-01 14:49:52.963 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.963 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'banner.jpg'!
2017-11-01 14:49:52.971 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.971 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'index.html'!
2017-11-01 14:49:52.980 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:52.980 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'index.html'!
2017-11-01 14:49:53.004 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:53.004 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'index.html'!
2017-11-01 14:49:53.006 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:53.007 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'index.html'!
2017-11-01 14:49:53.020 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:53.020 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fontawesome-webfont.woff'!
2017-11-01 14:49:53.034 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:53.034 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fontawesome-webfont.ttf'!
2017-11-01 14:49:53.154 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	null
2017-11-01 14:49:53.154 (+08:00)	d9ae1913-bed0-11e7-bdca-19fc04634b74	Successfully uploaded 'fontawesome-webfont.svg'!
END RequestId: d9ae1913-bed0-11e7-bdca-19fc04634b74
REPORT RequestId: d9ae1913-bed0-11e7-bdca-19fc04634b74	Duration: 3886.34 ms	Billed Duration: 3900 ms 	Memory Size: 1024 MB	Max Memory Used: 161 MB
```
