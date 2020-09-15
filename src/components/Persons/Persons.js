import React, { Component } from 'react'
import Person from './Person/Person';
class Persons extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('[Person.js] getDerivedStatefromProps');
        return state
    }
    //UNSAFE_componentWillReceiveProps
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate')
        if(nextProps.persons !== this.props.persons){
            // 
            return true;
        }else{
            return false;
        }
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Perons.js] getSnapshotBeforeUpdate;');
        return { message: 'Snapshot'}
    }
    //componentWillUpdate
    componentDidUpdate(prevProps,prevState,snapshot){ // this is going to be used more often as
            // you might want to refetch the data after updating  the method
        console.log('[Perons.js] componentDidUpdate');
        console.log(snapshot)
    }
    // to do the clean up worc 
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }
    
    render(){
        return(
            this.props.persons.map((person,index) =>{
                console.log('[Persons.js] ... child rendering ...')
                return <Person
                    click = {() =>this.props.click( index )}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    change = {(event) => this.props.change ( event,person.id)}
                />
            })
        )
    }
   
} 
export default Persons
