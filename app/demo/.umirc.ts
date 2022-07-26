import { defineConfig } from 'umi';

import { Config } from './config'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
