import { configure, addParameters } from '@storybook/react'
import viewports from './viewports'

addParameters({
  viewports: viewports,
  defaultViewport: 'laptop',
})

const csfreq = require.context('../src/components', true, /.stories.csf.tsx?$/)
function loadStories() {
  return csfreq.keys().map((filename) => {
    var m = csfreq(filename)
    return m
  })
}

configure(loadStories, module)
