import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { addReminder } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    addReminder() {
        this.props.addReminder(this.state.text);
    }
    renderReminders(){
        const {reminders} = this.props;
        console.log('final',reminders);
        return(
            <ul className='list-group'>
            {
                reminders.map(reminder => {
                return(<li key ={reminder.id} className='list-group-item'>
                <div className='list-group-item list-group-item-success'>{reminder.text}</div>
                <div className='list-item delete-button'>&#x2715;   </div>
                </li>)
                })
            }
            </ul>
        )
    }
    render() {
        console.log('props',this.props);
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
                    {this.renderReminders()}
                    <div className="text-center">
                        <button className="btn btn-blue-grey" onClick={() => this.addReminder()}>SUBMIT</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state)
{

return {
reminders : state
}
}
export default connect(mapStateToProps, { addReminder })(App);