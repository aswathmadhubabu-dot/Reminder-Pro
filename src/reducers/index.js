import { ADD_REMINDER } from '../constants';
import { DELETE_REMINDER } from '../constants';

const reminder = function(action) {
    let {text,dueDate} = action;
    return {
        text: action.text,
        id: Math.random(),
        dueDate

    }
}
const removeById = (state =[],id) => {
const reminders = state.filter(reminder => reminder.id !== id);
console.log('new removed reminders',reminders);
return reminders;

}

const reminders = function(state = [], action) {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders as state', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state,action.id);
            return reminders;
        default:
            return state;
    }

}

export default reminders;