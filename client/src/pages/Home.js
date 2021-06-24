/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Location from "../components/Location";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Container from "../components/Container";
import API from "../utils/API";


function Home () {
    const [locationState, setLocationState] = useState([])

    useEffect(()=>{
        API.getLocations()
        .then(res =>{
            console.log(res)
            setLocationState(res.data)
        })
    });

    return (
        <div>
            <Container style={{ marginTop:20}}>
                <p>Add a location</p>
                <input type="text" id="newLocation"/>
                <button type="submit" id="btnLocation">+</button>
            </Container>
            <Container>
                <h2>Locations:</h2>
                {locationState.map(userLocation => (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Link to={`/location/${userLocation._id}`}>
                        <Location
                        key={userLocation._id}
                        locationName={userLocation.locationName}
                        />
                    </Link>
                ))}
            </Container>

        </div>
    )
}

export default Home;