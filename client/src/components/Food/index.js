import React, {useState} from "react";
import "./style.css"

function Food (props) {

    const onRemove = (e) => {
        e.preventDefault();
        console.log(props.id);
        props.deleteThis(props.id);
    }

    return (
        <div>
            <h2 className="card-title">{props.foodName}</h2>
            <button type="button" className="remove" onClick={onRemove}>X</button>
        </div>
    );
}

export default Food;