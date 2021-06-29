/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Location from "../../components/Location";
import AddLocation from "../../components/Add_Location";
// import Row from "../components/Row";
// import Col from "../components/Col";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import API from "../../utils/API";


function Home (props) {
    const [locationState, setLocationState] = useState([])
    const [count, setCount] = useState(0)

    // const submitLocation = (data) =>{
    //     API.addLocation(data)
    //     .then(res => {
    //         console.log('Location Added', res)
    //         if(res.status === 200){
    //             console.log("SUCCESS! Location Added")
    //         } else {
    //         console.log("FAIL", res.status)
    //         }
    //     setCount(+1)
    // })
    // .catch(err => console.log("ERROR ADDING COMMENT", err))
    // }

    useEffect(()=>{
        setLocationState(locationState)
        setCount(+1)
    },[]);

    useEffect(()=> {
        API.getLocations()
        .then(res =>{
            console.log(res)
            setLocationState(res.data)
        })
    },[count])

    return (
        <div>
            <AddLocation />
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