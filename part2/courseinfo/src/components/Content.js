import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Part parts={parts} />
      <strong>total of {total} exercises </strong>
    </div>
  )
}

export default Content