import React from 'react'
import moment from 'moment'

interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = () => {
  const weekdayshort = moment.weekdaysShort()
  let weekdayShortName = weekdayshort.map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    )
  })
  return (
    <>
      <h1>Calendar</h1> {weekdayShortName}
    </>
  )
}
