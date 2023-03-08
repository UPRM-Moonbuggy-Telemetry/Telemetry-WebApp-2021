import axios from 'axios';

export const getGpsLocation = () => {
    return axios
        .get(`${process.env.REACT_APP_ENDPOINT}/api/dataEntry/location`)
        .then( response => {
            return response.data
        })
        .catch(error => {
            return error;
        })
}