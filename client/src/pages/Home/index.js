/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Location from "../../components/Location";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import API from "../../utils/API";


function Home () {
    const [locationState, setLocationState] = useState([])
    const [count, setCount] = useState(0)

    useEffect(()=>{
        API.getLocations()
        .then(res =>{
            console.log(res)
            setLocationState(res.data)
        })
    },[count])

    return (
        <div>
            <Container style={{ marginTop:20}}>
                <p>Add a location</p>
                <input type="text" id="newLocation"/>
                <button type="submit" id="btnLocation">+</button>
            </Container>
            <Container>
            <div className = "col-sm">
                <div className = "search">
                    <h2>Locations:</h2>
                    {locationState.map(location => (
                        <Link to={`/location/${location._id}`}>
                            <Location
                            key={location._id}
                            locationName={location.locationName}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            </Container>

        </div>
    )
}

export default Home;