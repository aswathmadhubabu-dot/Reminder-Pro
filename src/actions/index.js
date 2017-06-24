/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-24 14:08:50 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-24 14:08:50 
 */
import { ADD_REMINDER } from '../constants.js';
import { DELETE_REMINDER } from '../constants.js';
import { CLEAR_REMINDERS } from '../constants.js';
export const addReminder = function(text, dueDate) {
    const action = {
        type: 'ADD_REMINDER',
        text: text,
        dueDate
    }
    console.log('action from add reminder', action);
    return action;
}

export const deleteReminder = function(id) {
    const action = {
        type: 'DELETE_REMINDER',
        id
    }
    console.log('action from delete reminder', action);
    return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}