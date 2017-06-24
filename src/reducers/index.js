import { ADD_REMINDER } from '../constants';

const reminders = function(state = [], action) {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminders(action)];
            console.log('reminders as state', reminders);
            return reminders;
        default:
            return state;
    }

}

export default reminders;