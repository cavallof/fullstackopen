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

const Statistics = (props)=> {
  if (props.total === 0){
    return (
    <table>
      <tbody>
        <Statistic text={'No feedback given'} />
      </tbody>
    </table>
    )
  } else {
    return(
      <div>
        <table>
          <tbody>            
         <Statistic text={'Good'} value={props.good} />
         <Statistic text={'Neutral'} value={props.neutral} />
         <Statistic text={'Bad'} value={props.bad} />
         <Statistic text={'All'} value={props.total} />
         <Statistic text={'Average'} value={props.average} />
         <Statistic text={'Positive'} value={props.positivePercent + '%'} />
          </tbody>
         </table>
      </div>
     )
  }
  
}

const Statistic = ({text, value})=> {
  return(
    <tr>
      <td>{text}</td>    
      <td>{value}</td>
    </tr>
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
   return (
      <div>
        <Title title={title}/>
        <Button handleClick={increaseGood} text='good' />
        <Button handleClick={increaseNeutral} text='neutral' />
        <Button handleClick={increaseBad} text='bad' />
        <Titlestatistics title={statistics} />
        <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={total()} 
          average={average()} 
          positivePercent={positivePercent()} />   
      </div>
    )
}  
  


ReactDOM.render(<App />, 
  document.getElementById('root')
)
