import React, {useState, useEffect} from "react";
import Container from "../../components/Container"
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownLocation from "../DropdownLocation";
import { Link } from "react-router-dom";
import API from "../../utils/API";

function DropdownComboBox(props) {
  const [count, setCount] = useState(0);
  const [locationState, setLocationState] = useState([]);

  useEffect(()=> {
    API.getLocations()
    .then(res =>{
        console.log(res)
        setLocationState(res.data)
    })
  },[count])

  return(
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Locations
      </Dropdown.Toggle>

      <Dropdown.Menu>
          {locationState.map(location => (
            // <Link to={`/location/${location._id}`}>
                <DropdownLocation
                key={location._id}
                id={location._id}
                locationName={location.locationName}
                />
            // </Link>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
};

export default DropdownComboBox
