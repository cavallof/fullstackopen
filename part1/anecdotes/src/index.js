import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Anecdotes = (props) =>{
  return(
    <p>{anecdotes[props.anecdotes]}</p>
  )
}

const Votes = (props) =>{
  
  return (
    <p>{props.array[props.selected]} votes</p>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))   
  const max = anecdotes.length - 1
  const min = 0  
  
  const random = () => Math.floor(Math.random() * (max - min +1)) + min
  const nextAnecdote = () => setSelected(random)
  const vote = () => {   
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  } 
  return (    
    <div>
      <Anecdotes anecdotes={selected} />
      <Votes selected={selected} array={votes} />
      <Button handleClick={vote} text={'Vote'} />
      <Button handleClick={nextAnecdote} text={'Next Anecdote'} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App  />,
  document.getElementById('root')
)
