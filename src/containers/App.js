import React, { Component } from 'react';
//import logo from './logo.svg';
//import  from
import classes from './App.css';
//import Person from '../components/Persons/Persons/Person'; // should be upper case as Person
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/cockpit/cockpit'
import withClass from '../hoc/withClass'
import Auxiliary from '../hoc/Auxiliary'
//import person from './Person/Person';
//import styled from 'styled-components'
//import Radium,{StyleRoot} from 'radium'

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
  constructor(props){
    super(props);
    console.log('[App.js] -- constructor')
  }
  state = {
      persons:[
        {id:'321',name:'raghav',age:25},
        {id:'789',name:'sachin',age:23},
        {id:'780',name:'Aayu',age:11}
      ],
      showCockpit:true,
  }
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state
  }
  
   changeNameHandler = (event,id) => {
    console.log()
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
    //console.log(persons);reteventurn;
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
    alert(personIndex)
    //const persons = this.state.persons // -bad choice - this method takes the original array as it is refernce typed so mutable and 
    // and can lead to unpredictable behaviour so what we should do is to copy the array and then set state
    // good choices
    //const persons = this.state.persons.splice() // this will make the copy
    const persons = [...this.state.persons] // this will spread the array element and hence make copy of it

    persons.splice(personIndex,1)
    this.setState({persons:persons})
  }
  componentDidMount(){
    console.log('[App.js] .. componentDidMount')
  }
  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate will be used where you want to stop/allow the rending')
    return true // if you return false then it will not allow to update the state // true is default
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }
  render() {
    console.log('[App.js] ..  the render function')
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
              <Persons 
                persons = {this.state.persons}
                click = {this.deletePersonHandler}
                change ={this.changeNameHandler}
              />
        </div>
      )
     btnCalss.push(classes.Red)
    }
    if(this.state.persons.length ==0){
      assignedClasses = []
      //style.backgroundColor = '#dbc6c6';
    }
    return (
      
      <Auxiliary>
        <button onClick={() => {this.setState({showCockpit:!this.state.showCockpit})}}>Show Cockpit</button>
        {this.state.showCockpit?
          <Cockpit /*persons={this.state.persons}*/ title={this.props.title} toggleBtn={this.togglePageContent} /*showContent = {this.state.showContent}*//>

        :null}
        
        {persons}
      </Auxiliary>
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

export default withClass(App,classes.App);
