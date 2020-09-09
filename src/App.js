import React, { Component } from 'react';
//import logo from './logo.svg';
//import  from
import classes from './App.css';
import Person from './Person/Person'; // should be upper case as Person
//import person from './Person/Person';
//import styled from 'styled-components'
//import Radium,{StyleRoot} from 'radium'

// for production errors - if you want to define it explicitely
import ErrorBoundary from './ErrorBoundary/ErroBoundary';

import styled from 'styled-components';
const StyledButton = styled.button`
      background-color:${props => props.alt?'red':'green'};
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor:pointer;
      &:hover{
        background-color:${props => props.alt?'yellow':'white'};
        color:black;
      }
`;
class App extends Component {
  state = {
      persons:[
        {id:'321',name:'raghav',age:25},
        {id:'789',name:'sachin',age:23},
      ]
  }
  
   changeNameHandler = (event,id) => {
    
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })
    //

   const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    //console.log(persons);return;
    this.setState({
      persons:persons
      
    })
  }
  togglePageContent =() =>{
    console.log(classes)
    const doesShow = this.state.showContent;
    this.setState({showContent:!doesShow})
  }
  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons // -bad choice - this method takes the original array as it is refernce typed so mutable and 
    // and can lead to unpredictable behaviour so what we should do is to copy the array and then set state
    // good choices
    //const persons = this.state.persons.splice() // this will make the copy
    const persons = [...this.state.persons] // this will spread the array element and hence make copy of it

    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }
  render() {
    let btnCalss = [classes.Button];
    
    let assignedClasses = [];
    if(this.state.persons.length >=2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <2){
      assignedClasses.push(classes.bold)
    }
   
    let  persons = null;
    if(this.state.showContent){
      persons = (
        <div className={assignedClasses.join(' ')}>
            {
            this.state.persons.map((person,index) => {
              console.log(person)
              // The key has to be at the outer element in this case it's ErrorBoundary
              return  <ErrorBoundary key = {person.id} ><Person 
              click = {() => this.deletePersonHandler(index)}
              name = {person.name} 
              age={person.age}
              
              
              change ={(event) => this.changeNameHandler(event,person.id)}
              />
              </ErrorBoundary>
            })
            }
           
        </div>
      )
     btnCalss.push(classes.Red)
    }
    if(this.state.persons.length ==0){
      assignedClasses = []
      //style.backgroundColor = '#dbc6c6';
    }
    return (
      
      <div className={classes.App}>
        <h1>Hi, I'm a react app, and you are learning it</h1>
        <p>i'm react app and using the jsx</p>
        <button  className={btnCalss.join(' ')} onClick = {this.togglePageContent}>switch button</button>
        {persons}

      </div>
      
    );
  }
}
// react has the virtual DOM where it compares what it would render now and then compares with the previous DOM it rendered
// then it renderes it

//so for that matter the key element has to be there for it to be distinguise the data correctly. It can be any but unique value as in the case
// of DB id

// Whenever react re-render the component then everything inside the render method gets executed
// all we write in the code bloc is the javascript and we can not write anything else in in it so in 
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
