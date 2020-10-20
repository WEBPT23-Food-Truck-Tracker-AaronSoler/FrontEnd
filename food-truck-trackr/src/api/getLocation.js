import axios from 'axios';
/* the login body should be {username: username, password: password, location: { latitude, longitude } } */

/* When backend has api ready, will try to implement this:
const getlocation = () => {
    try {
        const {latitude, longitude} = await axios.get('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3');
        const response = await axios.post('backend', {login, location: {latitude, longitude} })
    } catch (error) {
        console.log(error)
    }
} */

const getLocation = () => {
    axios.get('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf3')
        .then(res => {
            console.log('sg: getLocation.js:  axios GET success!', res)
        })
        .catch(err => {
            console.error('There was an error grabbing your location: ', err)
            /* If locataion cannot be grabbed, hve user manually enter from dropdown */
            
        })
}