import axios from 'axios';
import React, {useState} from 'react';

const OperatorDashboard = () => {
    /* state should have logged in diner's data (including location) */
    const [miles, setMiles] = useState('1');
    const [nearbyTrucks, setNearbyTrucks] = useState([])
    
    const handleChange = (e) => {
        setMiles(e.target.value)
        console.log(miles)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* AXIOS POST location data to retrieve local truck data */
    }

    return (
        <div>
            <h2>Welcome, Operator</h2>
            {/* <NearbyTrucks /> */}
            <h3>Here are the trucks you have listed right now:</h3>
            <div>
                list of trucks...with edit/remove buttons
            </div>

        </div>
    )
}

export default OperatorDashboard;