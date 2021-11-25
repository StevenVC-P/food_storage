import React, { useState, useEffect } from "react";
import Location from "../../components/Location";
import AddLocation from "../../components/Add_Location";
import AddFood from "../../components/Add_Food";
import Container from "../../components/Container";
import API from "../../utils/API";


function Home (props) {
    const [locationState, setLocationState] = useState([]);
    const [count, setCount] = useState(0);

    const refresh = (data) => {
        API.addLocation({locationName: data.newLocation})
        .then(res => {
            console.log('Location Res', res)
            if(res.status === 200){
                console.log("SUCCESS! Location Added")
            } else {
                console.log("FAIL", res.status)
            }
        })
        .catch(err => console.log("ERROR ADDING LOCATION", err))
        setCount(count +1)
    };

    const remove = (data) => {
        API.removeLocation(data)
        .then(res => {
            console.log("location data:", res)
        })
        .catch(err => console.log(err));
        setCount(count +1)
    };

    useEffect(()=> {
        API.getLocations()
        .then(res =>{
            setLocationState(res.data)
        })
    },[count])
    return (
        <div>
            <AddLocation submitLocation={refresh} />
            <AddFood 
                setCount={setCount}
                count={count}/>
            <Container>
            <div className = "col-sm">
                <div className = "search">
                    <h2>Locations:</h2>
                    {locationState.map(location => (
                        <Location 
                        deleteThis={remove}
                        id={location._id}
                        // key={location._id}
                        locationName={location.locationName}
                        foods={location.foods}
                        // foodsKey={location.foods._id}
                        />
                    ))}
                </div>
            </div>
            </Container>

        </div>
    )
}

export default Home;