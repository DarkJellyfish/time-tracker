const viewports = require('./viewports')

module.exports = {
  stories: ['../**/*.stories.csf.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
}
