import React from 'react';
//import MapToComponents from 'react-map-to-components' 
const Todo = (props) =>{
   const {items,deleteitem1}=props;
   const len=items.length;

   //low el list items feha items nafez el delete 8er keda tala3 no items to show 
   const listitems=len ?(
    items.map(item =>{
        return (
            <div key={item.id}>
                <span className="s name">{item.name}</span>
                <span className="s age">{item.age}</span>
               
      <span className="s action" onClick={ ()=> deleteitem1(item.id)}>&times;</span>
 
            </div>
        )
    })
 
   ):(
       <p>Congratulations you finish your tasks</p>
   )
   
   

  
    {
        return(
        <div className="listitems">
            <span className="f name">Task</span>
            <span  className="f age">Time</span>
            <span  className="f action">Action</span>
            <span>{listitems}</span>
            
            
            </div>
        )
    }
}
 {/*
                  keda el delete item hat run 2abl ma ados 3ala 7aga awel ma el doc tehamel 

            <span onClick={deleteitem1(item.id)}>&times;</span>

                  tab a3mel ae7 3ashan teshta8al sa7 ?
                                 

               */}
export default Todo;