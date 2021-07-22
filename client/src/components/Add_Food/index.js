import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import DropdownLocation from "../../components/DropdownLocation";
import { Link } from "react-router-dom";
import DropdownCombobox from '../DropdownComboBox'
import "./style.css";
import API from "../../utils/API";

function AddFood (props) {
    const [locationState, setLocationState] = useState([]);
    //const [selection, addSelection] = useState("");
    const [newFoodName, addNewFoodName] = useState({});
    const [newFoodAmount, addNewFoodAmount] = useState({});
    const [newAmountType, addNewAmountType] = useState({});
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
        
    useEffect(() =>{
    API.getLocationNames()
        .then(res =>{
           // console.log("item", res.data)
            setItems(res.data)
        })
    },[count])

    useEffect(()=> {
        API.getLocations()
        .then(res =>{
           // console.log(res)
            setLocationState(res.data)
        })
    },[count])

    // function handleSelection(e) {
    //     const { name, value } = e.target;
    //     addSelection({...selection, [name]: value})
    // };

    function handleInputChange(e) {
        const { name, value } = e.target;
        addNewFoodName({...newFoodName, [name]: value})
    };

    function handleAmountChange(e) {
        const { name, value} = e.target;
        addNewFoodAmount({...newFoodAmount, [name]: value})
    };

    function handleAmountType(e) {
        const { name, value} = e.target;
        addNewAmountType({...newAmountType, [name]: value})
    };

   // const onSubmit = (e) => {
        //e.preventDefault();
        // console.log(selection)
        // console.log(selection.value)
        // if(selection.value){
        //     if(newFoodName.newFoodName && newFoodAmount.newFoodAmount && newAmountType.newAmountType){
        //         API.getLocationNames(selection.value)
        //         .then(res => {
        //             if(res.status === 200){
        //                 API.addFood({
        //                     key: newFoodName._id,
        //                     foodName: newFoodName.newFoodName,
        //                     foodAmount: newFoodAmount.newFoodAmount,
        //                     amountType: newAmountType.newAmountType
        //                 })
        //                 .then(res =>{
        //                     //console.log('New Food Res', res)
        //                     if (res.status === 200){
        //                         // console.log('Success', res.data)
        //                         API.locateFood(res.data)
        //                     } else { 
        //                         //console.log(res.status)
        //                     }
        //                 })
        //                 .catch(err => console.log("Food Add Error", err));
        //             }
        //         })
        //     }
        // } else {
        //    // console.log("Please Select a Location")
        // }
    //};

    return(
        <Container style={{ marginTop:20}}>
            <p>Add a Food</p>
            <form>
                <input type="text" name="newFoodName" placeholder="Food Name" onChange={handleInputChange} id="newFoodName"/>
                <input type="text" name="newFoodAmount" placeholder="#" onChange={handleAmountChange} id="newFoodAmount"/>
                <input type="text" name="newAmountType" placeholder="#" onChange={handleAmountType} id="newAmountType"/>
                <DropdownCombobox />

                <button type="submit" className="submit" id="btnFood">+</button>
            </form>
        </Container>
    );
};

export default AddFood;