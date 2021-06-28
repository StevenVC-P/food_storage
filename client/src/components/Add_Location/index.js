import React, { useState, useEffect } from "react";
import Container from "../Container";

function AddLocation (props) {
    const [newLocation, addNewLocation] = useState("");

    const onSubmit = (e) =>
    e.preventDefault();
    console.log(newLocation)
    if(newLocation){
        props.submitLocationa(newLocation)
        addNewLocation({});
    };

    return(
        <div>
            <Container style={{ marginTop:20}}>
                <p>Add a location</p>
                <input type="text" placeholder="Add Location" value={newLocation.location} id="newLocation"/>
                <button type="submit" className="submit" onClick={onSubmit} id="btnLocation">+</button>
            </Container>
        </div>
    );
};

export default AddLocation;