import React,{Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import '../index.css'
import {Action_creator_add_Reminder,Action_creator_REMOVE_Reminder,Action_creator_CLEARE_Reminders} from '../Action Creators/index'
class App extends Component {
    state={
        text:"",
        date:new Date()
    }

    render_reminder=()=>{
        const {reminders}=this.props;
        
       return(
           <ul>
               {
                   reminders.map(reminder=>{
                       return(
                      <li key={reminder.id}>
                          <div className="innerinner1">
                          <div><span>Task : </span>{reminder.text}</div>
                       <div><span>The Rest Of Time : </span>{moment(new Date(reminder.date)).fromNow()}</div>
                       </div>
                       <div className="innerinner2">
                          <div className="btn btn-danger b" onClick={()=>this.props.Action_creator_REMOVE_Reminder(reminder.id)}>X</div>
                          </div>
                          </li>
                       )
                   })
               }
           </ul>
       )
    }




    render(){
        const {x}="Select Time";
        console.log(this.state.date);
        return(
            
            <div className="x">
            <div className="inner">

            <h2>What Should U DO?</h2>
            <input
            value={this.state.text}
            onChange={(e)=>this.setState({text:e.target.value})}
            className="form-control" type="text" placeholder="Enter What You Think....?"/>
            
                    <DatePicker 
                    className="form-control data" 
                    value={this.state.date}
                    placeholderText="Select Time"
                        selected={this.state.date}
                        onChange={(date) =>{ this.setState({date})}}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
           
            <button 
            onClick={()=>{this.props.Action_creator_add_Reminder(
                this.state.text,this.state.date)
                this.setState({text:"",date:''})
            }}
            className="btn btn-primary btn-block">Add Reminder</button>
            <button 
            onClick={()=>this.props.Action_creator_CLEARE_Reminders()}
            
            className="btn btn-block btn-danger">Cleare Reminders</button>


            {this.render_reminder()}
            </div>
            </div>
        )
    }
}
//connect action creator with reducer {Action_creator_add_Reminder}
//and to connect reducer with app  
export default connect(state =>
{

    return {
        reminders : state
    }
},{Action_creator_add_Reminder,Action_creator_REMOVE_Reminder,Action_creator_CLEARE_Reminders}) (App);