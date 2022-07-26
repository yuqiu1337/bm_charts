import { defineConfig } from 'umi';

import { routes } from './config'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
});
