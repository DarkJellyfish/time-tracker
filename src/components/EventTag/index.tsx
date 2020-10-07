import { Chip } from '@material-ui/core'
import {
  Work,
  Weekend,
  Commute,
  School,
  Tv,
  EmojiPeople,
  Hotel,
  FitnessCenter,
} from '@material-ui/icons'
import React from 'react'

export enum CalendarEvent {
  work = 'work',
  freeTime = 'freeTime',
  commute = 'commute',
  homework = 'homework',
  tv = 'tv',
  family = 'family',
  sleep = 'sleep',
  workout = 'workout',
}

interface EventTagProps {
  type: CalendarEvent
  onDelete?: () => void
}

interface EventTagAttrs {
  label: string
  icon: any
}

const eventTags: {
  [index in CalendarEvent]: EventTagAttrs
} = {
  [CalendarEvent.work]: {
    label: 'Work',
    icon: Work,
  },
  [CalendarEvent.freeTime]: {
    label: 'Free Time',
    icon: Weekend,
  },
  [CalendarEvent.commute]: {
    label: 'Commuting',
    icon: Commute,
  },
  [CalendarEvent.homework]: {
    label: 'Homework',
    icon: School,
  },
  [CalendarEvent.tv]: {
    label: 'TV',
    icon: Tv,
  },
  [CalendarEvent.family]: {
    label: 'Family Time',
    icon: EmojiPeople,
  },
  [CalendarEvent.sleep]: {
    label: 'Sleep',
    icon: Hotel,
  },
  [CalendarEvent.workout]: {
    label: 'Workout',
    icon: FitnessCenter,
  },
}

export const EventTag: React.FC<EventTagProps> = ({ type, onDelete }) => {
  const event = eventTags[type]
  return (
    <Chip
      icon={<event.icon fontSize="small" />}
      label={event.label}
      onDelete={onDelete}
    />
  )
}
