import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLocations: function(){
        return axios.get("/api/location");
    },
    getLocationNames: function(){
        return axios.get("/api/location/locationName")
    },
    addLocation: function(locationData) {
        return axios.post("/api/location", locationData);
    },
    removeLocation: function(id) {
        console.log("axios", id)
        return axios.delete("/api/location/" + id);
    },
    addFood: function(foodData) {
        return axios.post("/api/product/food", foodData);
    },
    getLocationFodds: function(data) {
        return axios.get("/api/location/food", data)
    }
}