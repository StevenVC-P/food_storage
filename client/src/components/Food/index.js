import React, {useState} from "react";
import "./style.css"

function Food (props) {

    const onRemove = (e) => {
        e.preventDefault();
        // console.log(props.id);
        props.deleteThis(props.id);
    }
    return (
        <div className="food">
            <h6 className="card-title-food">{props.foodName}</h6>
            <h6 className="card-title-food">{props.foodAmount}</h6>
            <h6 className="card-title-food">{props.amountType}</h6>
            <button type="button" className="remove" onClick={onRemove}>X</button>
        </div>
    );
}

export default Food;