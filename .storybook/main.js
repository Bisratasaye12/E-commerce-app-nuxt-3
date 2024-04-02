module.exports = {
  stories: [
    '../components/**/*.stories.js',
    '../pages/**/*.stories.js',
    '../stories/**/*.stories.js'
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  framework: '@storybook/vue3-vite',
  docs: {
    autodocs: true
  }
};
  