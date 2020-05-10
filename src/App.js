import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '0', name: 'mahmoud', age: '35' },
      { id: '1', name: 'ahmed', age: '30' },
      { id: '2', name: 'medo', age: '22' }
    ],
    showpersons: false
  }

  changeNameHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] }
    person.name= event.target.value;
    const persons = { ...this.state.persons };
    persons[personIndex] = person; 

    this.setState({
      persons
    })

    
  }
  
  DeleteNameHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1)
    this.setState({
      persons
    })
  }

  TogglepersonsHandler = () => {
    const doesshow = this.state.showpersons;
    this.setState({ showpersons: !doesshow });
  }


  render() {

    const style = {
      backgroundColor: '#f44336',
      color: 'white',
      padding: '5px 10px',
      outline: '0',
      cursor: 'pointer',
      border: '1px solid #eee'
    };


    let persons = null;
    if (this.state.showpersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.DeleteNameHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.changeNameHandler(event , person.id)}
                />
            )
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <p className="App-intro">
          To get started
        </p>
        <button style={style} onClick={this.TogglepersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
