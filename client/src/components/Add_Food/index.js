import React, { useState } from "react";
import Container from "../Container";

function AddFood (props) {
    const [newFoodName, addNewFoodName] = useState({});
    const [newFoodAmount, addNewFoodAmount] = useState({});

    function handleInputChange(e) {
        const { name, value } = e.target;
        addNewFoodName({...newFoodName, [name]: value})
    };

    function handleAmountChange(e) {
        const { name, value} = e.target;
        addNewFoodAmount({...newFoodAmount, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(newFoodName)
        if(newFoodName.newFoodName  && newFoodAmount.newFoodAmount){
            props.submitFood(newFoodName)
        }
    };

    return(
        <div>
            <Container style={{ marginTop:20}}>
                <p>Add a Food</p>
                <form>
                    <input type="text" name="newFoodName" placeholder="Food Name" onChange={handleInputChange} id="newFoodName"/>
                    <input type="text" name="newFoodAmount" placeholder="#" onChange={handleAmountChange} id="newFoodAmount"/>
                    <button type="submit" className="submit" onClick={onSubmit} id="btnFood">+</button>
                </form>
            </Container>
        </div>
    );
};

export default AddFood;