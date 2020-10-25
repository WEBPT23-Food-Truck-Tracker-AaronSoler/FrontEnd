import React, {useEffect, useState} from 'react';
import {getAllDiners} from '../actions/dinerActions'

const DinerDashboard = () => {
/* state should have logged in diner's data (including location) */    
const [miles, setMiles] = useState('1');
//const [nearbyTrucks, setNearbyTrucks] = useState([]) 

    useEffect(() => {
        getAllDiners()
    }, [])

    //on change for miles away form/
    const handleChange = (e) => {
        setMiles(e.target.value)
        console.log(miles)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /* AXIOS POST location data from props/store(?) to retrieve local truck data and setNearbyTrucks to this data */
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
            <section>
                <h3>Crave a fave? Here's your list of favorites:</h3>
                <p>Click on a truck for more information:</p>
                <div>
                    list of fave trucks here...with option to remove
                </div>
            </section>
            <section>
                <h3>Looking for something new?</h3>
                <p>Click on a truck for more information:</p>
                <div>
                    list of all trucks on site here...with option to add to favorite
                </div>
            </section>
        </div>
    )
}

export default DinerDashboard;