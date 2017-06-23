import {ADD_REMINDER} from '../constants.js';

export const addReminder = function(text){
    const action ={
        type: 'ADD_REMINDER',
        text : text
    }
    console.log(action);
    return action;
}