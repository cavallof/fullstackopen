import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const title = 'Give Feedback'
const statistics = 'Statistics'
const Title = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}
const Titlestatistics = (props) =>{
  return (
    <h1>{props.title}</h1>
  )
}
const Button = ({handleClick, text}) =>{
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({text, value})=> {
  return(
    <p>{text} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const total = () => good + neutral + bad
  const average = () => {
    if (total()<1) return 0
    return ((good * 1) + (neutral * 0) + (bad * -1))/total() 
  } 
  const positivePercent = ()=> {
    if (total()<1) return 0
    return good * 100 / total()
  }

  if(total()===0){
    return (
      <div>
      <Title title={title}/>
        <Button handleClick={increaseGood} text='good' />
        <Button handleClick={increaseNeutral} text='neutral' />
        <Button handleClick={increaseBad} text='bad' />
        <Titlestatistics title={statistics} />
        <Statistics text={'No feedback given'} />
        </div>
    )
  } else {
    return (
      <div>
        <Title title={title}/>
        <Button handleClick={increaseGood} text='good' />
        <Button handleClick={increaseNeutral} text='neutral' />
        <Button handleClick={increaseBad} text='bad' />
        <Titlestatistics title={statistics} />
        <Statistics text={'Good'} value={good} />
        <Statistics text={'Neutral'} value={neutral} />
        <Statistics text={'Bad'} value={bad} />
        <Statistics text={'All'} value={total()} />
        <Statistics text={'Average'} value={average()} />
        <Statistics text={'Positive'} value={positivePercent() + '%'} />
      </div>
    )
  }  
  
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
