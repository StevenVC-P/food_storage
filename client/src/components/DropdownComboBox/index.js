import React, {useState, useEffect} from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownLocation from "../DropdownLocation";
import API from "../../utils/API";

function DropdownComboBox(props) {
  const [count, setCount] = useState(0);
  const [locationState, setLocationState] = useState([]);
  const [buttonState, setButtonState] = useState("Select")

  useEffect(()=> {
    API.getLocations()
    .then(res =>{
        setLocationState(res.data)  
    })
  },[count])

  const handleInputChange = (data) => {
    console.log(data)
    API.getLocationName(data)
    .then(res =>{
      props.setCount(props.count+1)
      setButtonState(res.data.locationName)
      props.pickThis(res.data.locationName)
      
      console.log("THE BIG True", props.count)
    })
  };

  return(
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <Dropdown.Menu>
            {locationState.map(location => (
                  <DropdownLocation
                  pickThis={handleInputChange}
                  key={location._id}
                  id={location._id}
                  locationName={location.locationName}
                  />
          ))}
        </Dropdown.Menu>
        <div>{buttonState}</div>
      </Dropdown.Toggle>
    </Dropdown>
  )
};

export default DropdownComboBox;
