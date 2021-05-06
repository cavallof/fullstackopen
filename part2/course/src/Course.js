import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((prev, curr)=>{    
      return prev + curr.exercises
    },0)
    return(
      <p><b>Number of exercises {sum}</b></p>
    ) 
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((e)=>{
          return <div key={e.id}><Part part={e} /></div> 
        })}
      </div>
    )
  }
  
  const Course = (props) => {
  return(
    <div>
    <Header course={props.course}/>
    <Content course={props.course}/>
    <Total course={props.course} />
    </div>
  )
  }

  export default Course