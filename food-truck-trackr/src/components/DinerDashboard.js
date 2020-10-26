import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    getDinerUserData, 
    getDinerFaves, 
    getAllTrucks,
    addFaveTruck,
    delFaveTruck
} from '../actions/dinerActions';
import {logOut} from '../actions';
import { axiosWithAuth } from '../api/axiosWithAuth';

const DinerDashboard = (props) => {
/* state should have logged in diner's data (including location) */ 
    const [miles, setMiles] = useState('1');
    const [nearbyTrucks, setNearbyTrucks] = useState([]) 
    const [faveTrucks, setFaveTrucks] = useState([]) 
    const [allTrucks, setAllTrucks] = useState([])

    useEffect(() => {
        props.getDinerUserData(props.diner_id)
        props.getDinerFaves(props.diner_id)
       props.getAllTrucks(props.diner_id)
       console.log('favetrucks', faveTrucks)
    }, [])

    useEffect(() => {
        setAllTrucks(props.all_trucks);
        setFaveTrucks(props.diner_faves)
        console.log('use effect wit all trucks')
    }, [props.all_trucks, props.diner_faves])

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

    const handleLogOut = (e) => {
        e.preventDefault();
        props.logOut();
        props.history.push('/');
    }

    return (
        <div>
            <button onClick={handleLogOut}>Logout</button>
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
                        <option value={10000000}>Any</option>
                    </select>
                    miles of me.
                </label>  
                <button>Update List</button>
            </form>
            <div>
                {nearbyTrucks.length === 0
                    ? <p>Bummer, there no trucks within those miles of you.</p>
                    : nearbyTrucks.map(truck => <p key={truck.id}>{truck.truck_name} / {truck.cuisine_type}</p>)
                }
            </div>
            <section>
                <h3>Crave a fave? Here's your list of favorites:</h3>
                <div>
                    {faveTrucks.length === 0 
                        ? <p>Aw, you have no favorites right now. Check out the list below to add some.</p>
                    : faveTrucks.map(fave => {
                        console.log(fave)
                    return <p>
                        {fave.truck_name}
{/*                         <span 
                            className='add-del-button'
                            onClick={
                                (e) =>
                                props.delFaveTruck(props.diner_id, fave.id)}>
                            Unfave
                        </span> */}
                    </p>
                    })
                    }
                </div>
            </section>
            <section>
                <h3>Looking for something new?</h3>
                <p>Here are all the trucks registered with us. Why not make them a favorite for easy tracking?</p>
                <div>
                    {allTrucks.length === 0
                        ? <h5>Loading...</h5>
                        : allTrucks.map(truck => {
                            return <p>{truck.truck_name} / {truck.cuisine_type}
                                <span className='add-del-button'
                                    onClick={(e) =>
                                        props.addFaveTruck(props.diner_id, truck.id)}>
                                    Add Fave
                                </span>
                            </p>
                           
                        })
                    }
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
        diner_faves: state.diner.favorites,
        all_diners: state.diner.allDiners,
        all_trucks: state.diner.allTrucks,
        isLoading: state.diner.isLoading,
        error: state.diner.error
    }
}

export default connect(mapStateToProps,{getDinerUserData, logOut, getDinerFaves, getAllTrucks, addFaveTruck, delFaveTruck})(DinerDashboard);