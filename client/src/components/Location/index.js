import React from "react";
import "./style.css"

function Location (props) {


    return (
        <div>
            <h2 className="card-title">{props.locationName}</h2>
            <button type="submit" className="remove">X</button>
        </div>
    );
}

export default Location;