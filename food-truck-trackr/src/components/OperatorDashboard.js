import axios from 'axios';
import React, {useState} from 'react';
import {connect} from 'react-redux';

const OperatorDashboard = (props) => {
    return (
        <div>
            <h2>Welcome, Operator</h2>
            <h3>Here are the trucks you have listed right now:</h3>
            <div>
                list of trucks...with edit/remove buttons
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        allOperators: state.operator.allOperators,
        operatorData: state.operator.operatorData
    }
}

export default connect(mapStateToProps, {})(OperatorDashboard);