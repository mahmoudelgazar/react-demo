import React from 'react';

const person = (props) => {
    return (
        <div className="card">
            <p> My name is {props.name} i have {props.age} old </p>
            <input type="text" value={props.name} onChange={props.changed} />
            <button onClick={props.click}>Delete</button>
        </div>
    )
}
export default person;