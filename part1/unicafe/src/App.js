import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  let count = good + neutral + bad

  if (count === 0 ) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  let average = (good - bad) / count
  let percentage = good / count * 100
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={count} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={percentage + " %"} />
      </tbody>
    </table>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App