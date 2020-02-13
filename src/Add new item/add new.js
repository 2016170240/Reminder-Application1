import React , {Component} from 'react'
class Addnew extends Component{
    state={
        name:"",
        age:""
    }
    changing = (e)=>
    {
        this.setState(
        {
            [e.target.id]:e.target.value
          //ma3nah en ha3mel set swa2 lel name aw age 3ala 7asab el id 

        })
    }
    submiting = (e) =>
    {
        e.preventDefault();
        this.props.additem(this.state);
        this.setState({
            name:"",
            age:""
        })
    }

    render()
    {
        return(
            <form onSubmit={this.submiting}>
                <input type="text" id="name" placeholder="Enter Task......" onChange={this.changing} value={this.state.name}/>
                <input type="number" id="age" placeholder="Enter Time....." onChange={this.changing} value={this.state.age}/>
                <input type="submit" name="Add" value="Add"/>
            </form>
        )
    }
}
export default Addnew;