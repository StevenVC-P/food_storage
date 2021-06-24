import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";

const Location = (props) => {
    const [readyRender, setReadyRender] = useState(false);
    const [data, setData] = useState();
    const {locationId} = useParams()
    const [count, setCount] = useState(0);

    useEffect(() => {
        API.getLocation(locationId)
        .then(res => {
            console.log("location data:", res.data)
            setData(res.data)
            setReadyRender(true)
        })
        .catch(err => console.log(err))
    })

    return (
        <>
        { readyRender === false ? (
            <p>loading</p>
        ) : (
            <>
            <div className="card text-center">
                <div className="card-header">
                <h2 className="card-title">{data.locationName}</h2>
                </div>
                <div className="card-body">

                </div>
            </div>
        </>
        )}
    </>
    );
}

export default Location