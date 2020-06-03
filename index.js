'use strict';

const semver = require('semver')

if (semver.satisfies(hexo.env.version, '>=5.0.0')){
  hexo.log.warn('hexo 5 has realized this function, please remove this patch.');
  hexo.log.warn('  yarn remove @jiangtj/hexo-patch-load-theme-config');
  return;
}
require('./load_theme_config')(hexo);
