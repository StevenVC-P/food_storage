import React, {useState} from "react";
//import API from "../../utils/API";
import Food from "../Food";
import "./style.css";

function Location (props) {
    //const [readyRender, setReadyRender] = useState(false);
    //const [foodState, setFoodState] = useState([]);
    //const [data, setData] = useState();
    //const {locationId} = useParams()
    const [count, setCount] = useState(0);

    const onRemove = (e) => {
        e.preventDefault();
        console.log(props.id);
        props.deleteThis(props.id);
        setCount(+1)
    }

    console.log(props.foods[0])
    console.log(props)
    return (
        <div>
            <h2 className="card-title">{props.locationName}</h2>
            <button type="button" className="remove" onClick={onRemove}>X</button>
            {props.foods.map((foods) => (
                <Food key={foods._id}
                    id={foods._id}
                    foodName = {foods.foodName}
                    foodAmount = {foods.foodAmount}
                    amountType = {foods.amountType}
                />
            ))}
        </div>
    );
}

export default Location;