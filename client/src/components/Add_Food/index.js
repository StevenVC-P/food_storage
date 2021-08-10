import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import DropdownCombobox from '../DropdownComboBox'
import "./style.css";
import API from "../../utils/API";

function AddFood (props) {
    const [selection, addSelection] = useState();
    const [newFoodName, addNewFoodName] = useState("");
    const [newFoodAmount, addNewFoodAmount] = useState();
    const [newAmountType, addNewAmountType] = useState("");
    const [{foodName, foodAmount, amountType}, addFoodValue] = useState({});
    const [count, setCount] = useState(0);

    function handleSelection(data) {
        addSelection(data)
    };

    function handleInputChange(e) {
        const { name, value } = e.target;
        addNewFoodName({...newFoodName, [name]: value})
        console.log(newFoodName.newFoodName)
        console.log(newFoodName)
    };

    function handleAmountChange(e) {
        const { name, value } = e.target;
        addNewFoodAmount({...newFoodAmount, [name]: value})
    };

    function handleAmountType(e) {
        const { name, value} = e.target;
        addNewAmountType({...newAmountType, [name]: value})
    };

    function createFoodObject() {
        addFoodValue({
            foodName:newFoodName.newFoodName,
            foodAmount:newFoodAmount.newFoodAmount,
            amountType:newAmountType.newAmountType,
        })
        //props.setCount(props.count+1)
    }

    function addFoodtoLocation() {
        API.addFood({foodName, foodAmount, amountType, location: selection})
        .then(res =>{
            console.log('New Food Res', res)
            if (res.status === 200){
                console.log('Success', res)
            } else { 
                console.log(res.status)
            }
        })
        .catch(err => console.log("Food Add Error", err));
    }

   const handleSubmit = async (e) => {
       e.preventDefault();
       await createFoodObject();
       await addFoodtoLocation();
   }

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