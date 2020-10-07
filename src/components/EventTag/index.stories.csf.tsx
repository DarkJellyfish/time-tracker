import React from 'react'
import { CalendarEvent, EventTag } from '.'

export default {
  title: 'EventTags',
  decorators: [(Story: React.FC) => <Story />],
}

export const Default = () =>
  Object.values(CalendarEvent).map((eventType) => {
    return <EventTag type={eventType} />
  })
