import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import DropdownCombobox from '../DropdownComboBox'
import "./style.css";
import API from "../../utils/API";

function AddFood (props) {
    const [locationState, setLocationState] = useState([]);
    const [selection, addSelection] = useState();
    const [newFoodName, addNewFoodName] = useState({});
    const [newFoodAmount, addNewFoodAmount] = useState({});
    const [newAmountType, addNewAmountType] = useState({});
    const [{foodName, amount, type} , addFoodValue] = useState({foodName:newFoodName, amount:newFoodAmount, type:newAmountType});
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
        
    useEffect(() =>{
    API.getLocationNames()
        .then(res =>{
           // console.log("item", res.data)
            setItems(res.data)
        })
    },[count])

    useEffect((data)=> {
        API.getLocations()
        .then(res =>{
           // console.log(res)
            setLocationState(res.data)
        })
        console.log(selection)
    },[selection])

    function handleSelection(data) {
        addSelection(data)
    };

    function handleInputChange(e) {
        const { name, value } = e.target;
        addNewFoodName({...newFoodName, [name]: value})
    };

    function handleAmountChange(e) {
        console.log(e.target)
        const { name, value } = e.target;
        addNewFoodAmount({...newFoodAmount, [name]: value})
    };

    function handleAmountType(e) {
        console.log(e.target)
        const { name, value} = e.target;
        addNewAmountType({...newAmountType, [name]: value})
    };

   const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selection)
        if(selection){
            if(newFoodName.newFoodName && newFoodAmount.newFoodAmount && newAmountType.newAmountType){
                API.getLocationName(selection)
                .then(res => {
                    if(res.status === 200){
                        //const { name, value} = e.target;
                        addFoodValue(currentState => ({
                            ...currentState,
                            name:{foodName},
                            amount:{amount},
                            type:{type},
                        }))
                        //    {...foodValue, name:{foodName}, amount:{amount}, type:{type}, location: selection})
                        console.log({foodName, amount, type})
                        // console.log(res.data)
                        // console.log("name:",newFoodName.newFoodName)
                        // console.log("Amount:",newFoodAmount.newFoodAmount)
                        // console.log("type:",newAmountType.newAmountType)
                        // API.addFood(res.data)({
                        //     foodName: newFoodName.newFoodName,
                        //     foodAmount: newFoodAmount.newFoodAmount,
                        //     amountType: newAmountType.newAmountType
                        // })
                        // .then(res =>{
                        //     console.log('New Food Res', res)
                        //     if (res.status === 200){
                        //         console.log('Success', res.data)
                        //         API.locateFood(res.data)
                        //     } else { 
                        //         console.log(res.status)
                        //     }
                        // })
                        // .catch(err => console.log("Food Add Error", err));
                    }
                })
            }
        } else {
           console.log("Please Select a Location")
        }
    };

    return(
        <Container style={{ marginTop:20}}>
            <p>Add a Food</p>
            <form>
                <input type="text" name="newFoodName" placeholder="Food Name" onChange={handleInputChange} id="newFoodName"/>
                <input type="text" name="newFoodAmount" placeholder="#" onChange={handleAmountChange} id="newFoodAmount"/>
                <input type="text" name="newAmountType" placeholder="#" onChange={handleAmountType} id="newAmountType"/>
                <DropdownCombobox 
                    pickThis={handleSelection}
                    setCount={setCount}
                    count={count}/>
                <button type="submit" className="submit" id="btnFood" onClick={handleSubmit}>+</button>
            </form>
        </Container>

    );
};

export default AddFood;