import React, { useState, useEffect } from "react";
import {render} from 'react-dom';
import Downshift from 'downshift';
import Container from "../Container";
import "./style.css";
import API from "../../utils/API";

function AddFood (props) {
    const [newFoodName, addNewFoodName] = useState({});
    const [newFoodAmount, addNewFoodAmount] = useState({});
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
        
    useEffect(() =>{
    API.getLocationNames()
        .then(res =>{
            console.log("item", res.data)
            setItems(res.data)
        })
    },[count])

    function handleInputChange(e) {
        const { name, value } = e.target;
        addNewFoodName({...newFoodName, [name]: value})
    };

    function handleAmountChange(e) {
        const { name, value} = e.target;
        addNewFoodAmount({...newFoodAmount, [name]: value})
    };

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
                    <Downshift
                        onChange={selection =>
                        alert(selection ? `You Selected ${selection.value}`: `Selection Cleared`)
                    }
                    itemToString={item=> (item ? item.value:'')}
                    >
                        {({
                            getInputProps,
                            getItemProps,
                            getLabelProps,
                            getMenuProps,
                            isOpen,
                            inputValue,
                            highlightedIndex,
                            selectedItem,
                            getRootProps,
                            }) => (
                                <div>
                                    <label {...getLabelProps()}>Add a Location  </label>
                                    <div
                                        style={{display:'inline-block'}}
                                        {...getRootProps({}, {suppressRefErrr: true})}
                                    >
                                        <input {...getInputProps()} />
                                    </div>
                                    <ul {...getMenuProps()}>
                            {isOpen
                                ? items
                                    .filter(item => !inputValue || item.value.includes(inputValue))
                                    .map((item, index) => (
                                    <li
                                        {...getItemProps({
                                        key: item.value,
                                        index,
                                        item,
                                        style: {
                                            backgroundColor:
                                            highlightedIndex === index ? 'lightgray' : 'white',
                                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                                        },
                                        })}
                                    >
                                        {item.value}
                                    </li>
                                    ))
                                : null}
                            </ul>
                        </div>
                        )}
                    </Downshift>

                    <button type="submit" className="submit" onClick={onSubmit} id="btnFood">+</button>
                </form>
            </Container>
        </div>
    );
};

export default AddFood;