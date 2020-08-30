import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; // should be upper case as Person
class App extends Component {
  state = {
      persons:[
        {name:'raghav',age:25},
        {name:'sachin',age:23},
      ]
  }
  swithNameHandler = (name) => {
    //this.state.persons[0].name = "Robin" // this is not allowed you can not update the state directly
    this.setState({
      persons:[
        {name:name,age:25},
        {name:'Sachin',age:23}
      ]
    })
    console.log('It was cliced');
  }
   changeNameHandler = (event) => {
    this.setState({
      persons:[
        {name:event.target.value, age:25},
        {name:'Sachin', age:23},

      ]
    })
  }
  render() {
    const style = {
      backgroundColor:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer',
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app, and you are learning it</h1>
        <p>i'm react app and using the jsx</p>
        <button style = {style} onClick = {this.swithNameHandler}>switch button</button> // this is not being used as of now
        <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click = {this.swithNameHandler.bind(this,'Max')}
        >
        </Person>
        <Person 
          name = "Sachin" 
          age="23">

          </Person>
        <Person 
          name = {this.state.persons[0].name} 
          age={this.state.persons[0].age}
          change = {this.changeNameHandler}
          >


          </Person>
        <Person 
          name = {this.state.persons[1].name}
          age="Infinity again"
          click={() => this.swithNameHandler('Robin')} // This will cause the Perfomance issue use bind instead
          >I'm also a switchName Handler because function refernce passed</Person> 
      </div>
    );
  }
}

// Hoocs are collection of function which you can use in the functional component
// useState returns an array with exact two element and always 2 elemtn - 1 st elemtn is our current state and the second
// always be the function which allows us to update this state
// Earlier we could not manaee
// if state changes or the props changes then it analysis the dom and also the code it is about to render
// ALl the events that you can listen to https://reactjs.org/docs/events.html#supported-events
// state is a reserved word and managed for dynamic content rendering 
// properties are for outside of a component but the state is managed inside a component
// Above in the component you can also pass the text "My name" or some html lists or somethin and then it can be received
// on the component file in the special property called the children
// as you can see the Person tag above will help in importing the compononent and render it with the root

export default App;
