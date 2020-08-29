import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; // should be upper case as Person
const app = (props) => {
  const [currentState, setCurrentState] = useState({
    persons:[
      {name:'raghav',age:25},
      {name:'sachin',age:23},
    ]
  })
  const [otherState, setOtherState] = useState("This is the other state")
  const swithNameHandler = () =>{
    setCurrentState({
      persons:[
        {name:'Robin',age:25},
        {name:'Sachin',age:23},
      ]
    })
  }
  console.log(currentState, otherState);
  
    return (
      <div className="App">
        <h1>Hi, I'm a react</h1>
        <p>i'm react app and using the jsx</p>
        <button onClick = {swithNameHandler}>switch button</button>
        <Person name = {currentState.persons[0].name} age={currentState.persons[0].age}></Person>
        <Person name = "Sachin" age="23"></Person>
        <Person name = "No one" age="Infinity"></Person>
        <Person name = "NO one again" age="Infinity again">My name</Person> 
      </div>
    );
  
}

/*state = {
  persons:[
    {name:'raghav',age:25},
    {name:'sachin',age:23},
  ]
}
swithNameHandler = () => {
//this.state.persons[0].name = "Robin" // this is not allowed you can not update the state directly
this.setState({
  persons:[
    {name:'Robin',age:25},
    {name:'Sachin',age:23}
  ]
})
console.log('It was cliced');
}
*/
// if you are using the state in the component you can differentiate your component in state full and stateless component
// Hoocs are collection of function which you can use in the functional component
// useSate allows us to manage state in a functional component
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

export default app;
