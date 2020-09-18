import React, {Component, Fragment} from 'react';
import Auxiliary from '../../../hoc/Auxiliary'
//import Proptypes from 'prop-types';
//import "./Person.css"
//import styled from 'styled-components';
//import Radium from 'radium'
import classes from "./Person.module.css"
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/AuthContext'
class Person extends Component {
    //inp = document.querySelectorAll('input')
    constructor(props){
        super();
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        //document.querySelector('input').focus()
        //this.inputElement.focus()
        console.log(this.inputElementRef)
        this.inputElementRef.current.focus()
    }
    render(){
        return (
            <withClass>
                <AuthContext.Consumer>{(context) => context.isAuthenticated ? <p>Authenticated</p>:<p>Please Login</p>}</AuthContext.Consumer>
                
                <p onClick={this.props.click}>My name is  {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input 
                    type="text"
                    onChange={this.props.change} 
                    value={this.props.name}
                   // ref={(inputEle) =>{this.inputElement = inputEle}} 
                   ref ={(this.inputElementRef)}
                />
            </withClass>
        )
    }
}
/*Person.propTypes = {
    click:  PropTypes.func,
    name:   PropTypes.string,
    age:    PropTypes.number,
    change: PropTypes.func
}*/
export default withClass(Person,classes.Person);