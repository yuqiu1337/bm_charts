import { defineConfig } from 'dumi';
import menus from './src/common/menus';

const path = require('path');

export default defineConfig({
  title: '@agito/chart-react',
  favicon:
    'https://t9.baidu.com/it/u=1566632634,2799025609&fm=85&app=131&size=f242,150&n=0&f=JPEG&fmt=auto?s=D0201570D8F516925B53E5CD0300F0A2&sec=1654275600&t=a51e7e6d32dd6aaedc57cca8e1607b7c',
  logo: 'https://t9.baidu.com/it/u=1566632634,2799025609&fm=85&app=131&size=f242,150&n=0&f=JPEG&fmt=auto?s=D0201570D8F516925B53E5CD0300F0A2&sec=1654275600&t=a51e7e6d32dd6aaedc57cca8e1607b7c',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
  alias: {
    '@/Assembly': path.resolve(__dirname, './src/Assembly'),
    '@/hooks': path.resolve(__dirname, './src/hooks'),
  },
  base: '/',
  publicPath: './',
  menus,
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  proxy: {
    '/icsystem': {
      target: 'https://upgrade.nekoplan.com/icsystem', //体验
      changeOrigin: true,
      pathRewrite: { '^/icsystem': '' },
    },
  },
  // more config: https://d.umijs.org/config
});
