import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";

function DropdownLocation (props) {

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(props.id);
        props.pickThis(props.id);
    };

    return (
        <Dropdown.Item name={props.locationName} value={props.locationName}><div onClick={handleInputChange}>{props.locationName}</div></Dropdown.Item>
    );
}

export default DropdownLocation;