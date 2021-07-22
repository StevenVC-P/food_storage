import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLocations: function(){
        return axios.get("/api/location");
    },
    getLocationNames: function(){
        return axios.get("/api/location/locationName")
    },
    getLocationName: function(id){
        return axios.get("/api/location/" + id)
    },
    addLocation: function(locationData) {
        return axios.post("/api/location", locationData);
    },
    removeLocation: function(id) {
        console.log("axios", id)
        return axios.delete("/api/location/" + id);
    },
    addFood: function(foodData) {
        return axios.post("/api/food", foodData);
    },
    locateFood:function(foodData) {
        return axios.post("/api/location/food", foodData)
    }
    // getLocationFoods: function(data) {
    //     return axios.get("/api/location/food", data)
    // }
}