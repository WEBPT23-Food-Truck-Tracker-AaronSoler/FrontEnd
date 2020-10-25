import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getDinerUserData} from '../actions/dinerActions';
import { axiosWithAuth } from '../api/axiosWithAuth';

const DinerDashboard = (props) => {
/* state should have logged in diner's data (including location) */ 
    const [miles, setMiles] = useState('1');
    const [nearbyTrucks, setNearbyTrucks] = useState([]) 

    useEffect(() => {
        props.getDinerUserData(props.diner_id)
    }, [])

    //on change for miles away form/
    const handleChange = (e) => {
        setMiles(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .get(`/restricted/diner/${props.diner_id}/dashboard?radius=${miles}&favorites=false`)
            .then(res => {
                console.log(res.data)
                setNearbyTrucks(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Welcome, {props.first_name}!</h2>
            {/* <NearbyTrucks /> */}
            <h3>Hungry? Here are some trucks nearby you right now:</h3>
            <form onSubmit={handleSubmit}>
                <label> 
                    See trucks within 
                    <select name='miles' value={miles} onChange={handleChange}> 
                        <option value={1}>0.5</option>
                        <option value={2}>1</option>
                        <option value={3}>1.5</option>
                        <option value={4}>2</option>
                        <option value={100}>50</option>
                    </select>
                    miles of me.
                </label>  
                <button>Update List</button>
            </form>
            <div>
                {nearbyTrucks.length === 0
                    ? <p>Bummer, there no trucks within those miles radius of you.</p>
                    : nearbyTrucks.map(truck => <p key={truck.id}>{truck.truck_name}</p>)
                }
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
                    lit of all trucks on site here...with option to add to sfavorite
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        first_name: state.diner.first_name,
        diner_id: state.diner.id,
        current_location: state.diner.current_location,
        message: state.diner.message,
        all_diners: state.diner.allDiners,
        is_loading: state.diner.isLoading,
        has_error: state.diner.error
    }
}

export default connect(mapStateToProps,{getDinerUserData})(DinerDashboard);