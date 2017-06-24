import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ADD_REMINDER} from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    addReminder(){
        console.log('this.state',this.state);
    }

    render() {
        return (
            <div>
                <div className="card-block">

                    <div className="text-center">
                        <h3><i className="fa fa-tasks"></i> Remember:</h3>
                        <hr className="mt-2 mb-2" />
                    </div>

                    <div className="md-form">
                        <i className="fa fa-bookmark"></i>
                        <input type="text" id="form2" className="form-control" placeholder='i want...' onChange={event => this.setState({ 'text': event.target.value })} />

                    </div>
                    <div className="md-form">
                        <i className="fa fa-calendar "></i>
                        <input type="date" id="form4" className="form-control" placeholder='Date' />

                    </div>
                    <div className="text-center">
                        <button className="btn btn-blue-grey" onClick={() => this.addReminder()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch)
{
return bindActionCreators({addReminder},dispatch);
}

export default App;