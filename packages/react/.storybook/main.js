module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-react-docgen',
  ],
  features: {
    modernInlineRender: true,
    buildStoriesJson: true,
    // storyStoreV7: true,
    // previewMdx2: true, // 👈 MDX 2 enabled here
  },
  framework: '@storybook/react',
};
