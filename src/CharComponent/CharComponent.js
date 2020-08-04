import React from 'react';
import '../CharComponent.css';

function CharComponent (props) {
    return (
        <div className="CharComponent" onClick={props.clicked}>
            {props.char}
        </div>
    )
}

export default CharComponent;