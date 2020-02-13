import React , {Component} from 'react';
import Todo from './todo/todo' 
import Addnew from './Add new item/add new';
class App extends Component{

  state={
    items:
    [
      {id:1,name:"study react",age:6},
      {id:2,name:"web design totouraile",age:2}
    
   ]
  }
  //ana 3amat el function hena 3ashan lama agey anady 3ala el this t3ood 3ala el app 
  //tab ana kede 3awez a delete el items elly hea ma3roda f el todo component f hadtar en a pass ell function de as a props

  deleteitem = (id) =>
  {
  //1- hageb el items kolaha elly f el state hena 
  let items=this.state.items ;

  //2-check hal el id elly mab3ot da hwa hwa ely ha3mello delete
 
  let i=items.findIndex(item => item.id === id)
  //3- delete
  items.splice(i,1);

  //4- update state
  this.setState({items})


  }
  additem = (item) =>
  {
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items});
  }

render()
{
  return(
  
    <div className="app container">
      <h2 className="text-center">Todo List</h2>
    <Todo items={this.state.items} deleteitem1={this.deleteitem}/>
    <Addnew additem={this.additem}/>
    </div>
  )
}
}
export default App;
