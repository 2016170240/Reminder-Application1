import {ADD_REMINDER, REMOVE_REMINDER, CLEARE_REMINDERS} from '../Action Types/index'
import { bake_cookie, read_cookie } from 'sfcookies'
const Red1 = (state = [],action)=>
{
    let reminders = null;
   state= read_cookie("reminders")
    if(action.type === ADD_REMINDER)
    {
        reminders = [...state,{text:action.text,date:action.date,id:Math.random()}];
        bake_cookie("reminders",reminders);
        console.log("from reducer",reminders);
        return reminders;
    }
    else if(action.type === REMOVE_REMINDER)
    {
      /*filter function =>
      betraga3 array gededa 
 bte3mel cheak lw el reminder id mesh el action id 5odny m3ak f  el array el gededa 
 8er keda mata5odnesh ya3nay mat3rednesh ya3ny emsa7ny.
      */
      
      reminders=state.filter(reminder=>reminder.id !== action.id);
      bake_cookie("reminders",reminders);
      console.log("Removed",reminders);
      return reminders;
    }
    else if(action.type === CLEARE_REMINDERS)
    {
      reminders=[];
      console.log("Cleared",reminders);
      bake_cookie("reminders",reminders);
      return reminders;
    }
   return(
     state
   )

}
export default Red1;