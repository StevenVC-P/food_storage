import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getLocations: function(){
        return axios.get("/api/location");
    },
}