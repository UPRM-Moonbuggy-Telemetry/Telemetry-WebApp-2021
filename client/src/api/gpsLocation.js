import axios from 'axios';

export const getGpsLocation = () => {
    return axios
        .get(`https://app-moonbuggy.herokuapp.com/api/dataEntry/location`)
        .then( response => {
            return response.data
        })
        .catch(err => {
            return err.response
        })
}