import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLocations: function(){
        return axios.get("/api/location");
    },
    addLocation: function(locationData) {
        return axios.post("api/location", locationData)
    }
}