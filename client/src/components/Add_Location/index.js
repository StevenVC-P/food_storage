import React, { useState } from "react";
import Container from "../Container";

function AddLocation (props) {
    const [newLocation, addNewLocation] = useState({});
    const [count, setCount] = useState(0);

    function handleInputChange(event) {
        const { name, value } = event.target;
        addNewLocation({...newLocation, [name]: value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(newLocation)
        if(newLocation.newLocation){
            props.submitLocation(newLocation)
        }
    };

    return(
        <div>
            <Container style={{ marginTop:20}}>
                <p>Add a location</p>
                <input type="text" name="newLocation" placeholder="Add Location" onChange={handleInputChange} id="newLocation"/>
                <button type="submit" className="submit" onClick={onSubmit} id="btnLocation">+</button>
            </Container>
        </div>
    );
};

export default AddLocation;