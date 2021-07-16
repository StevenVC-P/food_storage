import React from "react";

function DropdownLocation (props) {
    return (
        <div>
            <li className="card-title">{props.locationName}</li>
        </div>
    );
}

export default DropdownLocation;