var path = require("path");
var Hexo = require("hexo");

var hexo = new Hexo(path.join(process.cwd(), 'tmp/serverless-hexo-blog-static-files-master'), {
  config_path: path.join(process.cwd(), 'tmp/serverless-hexo-blog-static-files-master/_config.yml')
});

hexo.loadPlugin(require.resolve('hexo-renderer-marked'))
hexo.loadPlugin(require.resolve('hexo-renderer-stylus'))
hexo.loadPlugin(require.resolve('hexo-generator-tag'))
hexo.loadPlugin(require.resolve('hexo-generator-index'))
hexo.loadPlugin(require.resolve('hexo-generator-category'))
hexo.loadPlugin(require.resolve('hexo-generator-archive'))

console.log(path.join(process.cwd(), 'tmp/serverless-hexo-blog-static-files-master/_config.yml'));
hexo.init().then( () => {
  console.info("Running Hexo Generate");
	hexo.call("generate",{force: true})
		.then( () => {
			return hexo.exit();
		})
		.catch( () => {
			return hexo.exit();
		});
});
