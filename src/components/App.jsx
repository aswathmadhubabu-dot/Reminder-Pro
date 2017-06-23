import React, { Component } from 'react';
import './App.css';

function (){
    return{
        type:'ADD_REMINDER',
        payload:''
    }
}
class App extends Component {
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
                            <input type="text" id="form2" className="form-control" placeholder='i want...' />
                            
                        </div>
                        <div className="md-form">
                            <i className="fa fa-calendar "></i>
                            <input type="date" id="form4" className="form-control" placeholder='Date'/>
                            
                        </div>
                        <div className="text-center">
                            <button className="btn btn-blue-grey">SUBMIT</button>
                        </div>
                </div>
        </div>
                        );
    }
}

export default App;