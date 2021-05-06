import './App.css';
import React, { useState } from 'react';

const Numbers = ({filter, person})=>{        
  return(
    person.map(e =>
       e.name.toLowerCase().includes(filter.toLowerCase()) ? 
       <div key={e.name}>{e.name} {e.number}</div> : ''   
    ) 
  )
}
const Form = (props)=>{
  return(
<form onSubmit={props.addPerson}>
        <div>
          name: <input onChange={props.handleNameChange}/>
        </div>        
        <div>
          number: <input onChange={props.handleNumberChange}/>
        </div>        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Filter = ({handleFilter}) =>{
  return(
    <div>
        filter show with<input onChange={handleFilter} />
      </div>
  )
}
const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '343512356' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()    
    if(persons.some(e=> e.name === newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }     
      setPersons(persons.concat(personObject))
    }
    }
    
    const handleNameChange = (event) =>{    
    setNewName(event.target.value)
    }

    const handleNumberChange = (event) =>{    
      setNewNumber(event.target.value)
      }

    const handleFilter = (event)=>{
      setFilter(event.target.value)
     }

    
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <Form handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange}
      addPerson={addPerson}/>
      <h2>Numbers</h2>
      <Numbers filter={filter} person={persons}/>
    </div>
  )
}

export default App;
