import {ADD_REMINDER} from '../constants';

const reminders = function(state= [],action){
    var reminders = null;
    switch(action.type)
    {
        case ADD_REMINDER : 
        reminders = [...state,reminder(action)];
        console.log('remindes as state',reminders);
        return reminders;
        default: 
        return state;
    }

}

export default reminders;