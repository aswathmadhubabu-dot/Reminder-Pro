import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { addReminder } from '../actions';
import { deleteReminder } from '../actions';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate :''
        }
    }
    addReminder() {
        this.props.addReminder(this.state.text);
    }
    deleteReminder(id) {
        this.props.deleteReminder(id);
    }
    renderReminders() {
        const {reminders} = this.props;
        console.log('final', reminders);
        return (
            <ul className='list-group'>
                {
                    reminders.map(reminder => {
                        return (<li key={reminder.id} className='list-group-item justify-content-between'>
                            <div className='list-group-item '>{reminder.text}    </div>
                            <button className='btn btn-blue-grey' onClick={() => this.deleteReminder(reminder.id)}>Remove &nbsp;&nbsp;<i className="fa fa-times"></i>


                            </button>




                        </li>)
                    })
                }
            </ul>
        )
    }
    render() {
        console.log('props', this.props);
        return (
            <div>
                <div className="card-block">

                    <div className="text-center">
                        <h3><i className="fa fa-tasks"></i> Remember:</h3>
                        <hr className="mt-2 mb-2" />
                    </div>

                    <div className="md-form">
                        
                        <input type="text" id="form2" className="form-control" placeholder='i want...' onChange={event => this.setState({ 'text': event.target.value })} required/>

                        <button className="btn btn-floating btn-blue-grey" onClick={() => this.addReminder()}><i className='fa fa-plus'></i></button>

                    </div>
                    <div className="md-form">
                        
                        <input type="date" id="form4" className="form-control" placeholder='Date' />

                    </div>
                    {this.renderReminders()}
                     <div class="modal-footer text-center">
                        <div class="options">
                           <h3>By</h3>
                           <h5>Aswath</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {
        reminders: state
    }
}
export default connect(mapStateToProps, { addReminder, deleteReminder })(App);