import {ADD_REMINDER, REMOVE_REMINDER, CLEARE_REMINDERS} from '../Action Types/index'
export const Action_creator_add_Reminder = (text,date)=>
{
    const action = {

    type : ADD_REMINDER,
    text,
    date

    }
    console.log("data",action)
    return action;
}
export const  Action_creator_REMOVE_Reminder=(id)=>{
    const action={
        type:REMOVE_REMINDER,
        id
    }
    console.log("REMOVED",action);
    return action;
}
export const  Action_creator_CLEARE_Reminders=()=>{
    const action={
        type:CLEARE_REMINDERS,
        
    }
    console.log("CLARED",action);
    return action;
}