/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-24 14:08:46 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-24 14:08:46 
 */
import { ADD_REMINDER } from '../constants';
import { DELETE_REMINDER } from '../constants';
import { CLEAR_REMINDERS } from '../constants';
import { bake_cookie } from 'sfcookies';
import { read_cookie } from 'sfcookies';
const reminder = function(action) {
    let { text, dueDate } = action;
    return {
        text: action.text,
        id: Math.random(),
        dueDate

    }
}
const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new removed reminders', reminders);
    return reminders;

}

const reminders = function(state = [], action) {
    let reminders = null;
    state = read_cookie('reminders');
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }

}

export default reminders;