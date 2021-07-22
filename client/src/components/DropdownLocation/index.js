import React, {useState} from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";

function DropdownLocation (props) {
    const [count, setCount] = useState(0);

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(props.id);
        props.pickThis(props.id);
        setCount(+1)
    };

    return (
        <Dropdown.Item name={props.locationName} value={props.locationName}><div onClick={handleInputChange}>{props.locationName}</div></Dropdown.Item>
    );
}

export default DropdownLocation;