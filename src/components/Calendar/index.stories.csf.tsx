import React from 'react'
import { Calendar } from '.'

export default {
  title: 'Calendar',
  decorators: [(Story: React.FC) => <Story />],
}

export const Default = () => <Calendar />
