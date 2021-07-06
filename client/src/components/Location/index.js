import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
//import Food from "../Food";
import "./style.css";

function Location (props) {
    const [readyRender, setReadyRender] = useState(false);
    //const [foodState, setFoodState] = useState([]);
    //const [data, setData] = useState();
    const {locationId} = useParams()
    const [count, setCount] = useState(0);

    const onRemove = (e) => {
        e.preventDefault();
        console.log(props.id);
        props.deleteThis(props.id);
    }

    useEffect(() => {
        API.getLocations()
        .then(res => {
            //console.log("location data:", res.data)
            //setData(res.data)
        })
    },
    [count]
    )

    return (
        <div>
            <h2 className="card-title">{props.locationName}</h2>
            <button type="button" className="remove" onClick={onRemove}>X</button>
            {/* {data.food.map(food => (
                <div>
                    <p className="script" key={food.id}>"{food.name} {food.amount} {food.amountType}"</p>
                </div>
            ))} */}
        </div>
    );
}

export default Location;