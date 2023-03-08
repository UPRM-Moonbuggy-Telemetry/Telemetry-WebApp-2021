import axios from 'axios';

export const getBatteryStatus = () => {
    return axios
        .get(`${process.env.REACT_APP_ENDPOINT}/api/dataEntry/battery`)
        .then( response => {
            return response.data
        })
        .catch(error => {
            return error;
        })
}