//import React from 'react' // we are not implicitely using reactCreateElement here so don't need it

const auxiliary = (props) => props.children; // children will always refer the content b/w opening and closing 
// tag of this component which is extented in the person.js file

// we are returnly only one expression here 
export default auxiliary;