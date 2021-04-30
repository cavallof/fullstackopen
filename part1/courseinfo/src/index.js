import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const course = 'Half Stack application development'
  const parts = [ 
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content part={parts}  />
      <Total  part={parts} />      
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {  
  
    return( 
     <div>
       <Part prop={props.part[0]}/>
       <Part prop={props.part[1]}/>
       <Part prop={props.part[2]}/>
     </div>
       
     )   
  
}

const Total = (props) => {

  return(
    <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  )
}

const Part = (props) =>{ 
  return(    
      <p>{props.prop.name} {props.prop.exercises}</p>       
  )
}

ReactDOM.render(<App />, document.getElementById('root'))