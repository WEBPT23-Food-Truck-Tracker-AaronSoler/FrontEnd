import axios from 'axios';

export const dinerLocation = () => {
    return axios.get('https://geolocation-db.com/json/7733a990-ebd4-11ea-b9a6-2955706ddbf')
        .then(res => {
            console.log(res.data)
            return {
                diner_latitude: res.data.latitude,
                diner_longitude: res.data.longitude,
                diner_city: res.data.city,
            }
        })
        .catch(err => console.error(err))
}