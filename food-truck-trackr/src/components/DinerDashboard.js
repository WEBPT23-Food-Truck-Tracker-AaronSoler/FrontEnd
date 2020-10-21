import axios from 'axios';
import React, {useState} from 'react';

const DinerDashboard = () => {
    /* state should have logged in diner's data (including location) */
    const [miles, setMiles] = useState('1');
    const [nearbyTrucks, setNearbyTrucks] = useState([])
    
    const handleChange = (e) => {
        setMiles(e.target.value)
        console.log(miles)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* AXIOS send location data to retrieve local truck data */
    }

    return (
        <div>
            <h2>Welcome, Diner</h2>
            {/* <NearbyTrucks /> */}
            <h3>Hungry? Here are some trucks nearby (LOCATION) right now:</h3>
            <form onSubmit={handleSubmit}>
                <label> 
                    See trucks within 
                    <select name='miles' value={miles} onChange={handleChange}> 
                        <option value={1}>0.5</option>
                        <option value={2}>1</option>
                        <option value={3}>1.5</option>
                        <option value={4}>2</option>
                    </select>
                    miles of me.
                </label>  
                <button>Update List</button>
            </form>
            
            <div>
                list of nearby trucks....
            </div>
            {/* <SearchTrucks /> */}
            {/* <FaveTrucks /> */}
        </div>
    )
}

export default DinerDashboard;