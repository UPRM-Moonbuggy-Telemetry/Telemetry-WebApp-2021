import axios from 'axios';

export const getBatteryStatus = () => {
    return axios
        .get(`https://app-moonbuggy.herokuapp.com/api/dataEntry/battery`)
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}