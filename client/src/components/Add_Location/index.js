import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../Container";

function AddLocation (props) {
    const [newLocation, addNewLocation] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        addNewLocation({...newLocation, [name]: value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(newLocation)
        if(newLocation.newLocation){
        API.addLocation({
            locationName: newLocation.newLocation
        })
        .then(res => {
            console.log('Location Res', res)
            if(res.status === 200){
                console.log("SUCCESS! Location Added")
            } else {
                console.log("FAIL", res.status)
            }
        })
        .catch(err => console.log("ERROR ADDING LOCATION", err))
        };
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