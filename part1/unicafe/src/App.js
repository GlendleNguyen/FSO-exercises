import { useState} from 'react';

const Header = () => {
  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h1>Statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
  </div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App