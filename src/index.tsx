import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar } from './components/Calendar'

function App() {
  return (
    <div>
      <Calendar />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
