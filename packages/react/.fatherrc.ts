const path = require('path');

export default {
  // more father 4 config: https://github.com/umijs/father-next/blob/master/docs/config.md
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  esm: {
    output: 'es',
  },
  umd: {
    output: 'umd',
  },
};
