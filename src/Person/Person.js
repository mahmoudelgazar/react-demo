import React from 'react';
import PersonClasses from './Person.js';
const person = (props) => {
    return (
        <div className={PersonClasses.card}>
            <p> My name is {props.name} i have {props.age} old </p>
            <input type="text" value={props.name} onChange={props.changed} />
            <button onClick={props.click}>Delete</button>
        </div>
    )
}
export default person;