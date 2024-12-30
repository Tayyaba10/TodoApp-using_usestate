'use client'

import { useState } from "react";

export default function Todo () {
 // define state
  const [todos, setTodos] = useState([{task :"",id:1}]);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  //Add todo
  const addTodos = () => {
    let obj : any = todos.find(items => items.id !== id)
    if(obj){
      let newArray = todos.filter(items => items.id !== obj.id)
      setTodos([...newArray,{task:input, id:id}])
        setInput("");
        setId(0);
        return 
    }
        setTodos([...todos,{task:input, id:id}])
        setInput("");
        setId(0);

    };
  
  //edit todos
  const editTodos = (id:any) => {
    let obj : any = todos.find(items => items.id == id)
    setInput(obj.task);
    setId(obj.id);
  }

  //Delete todo
  const deleteTodo = (id : any ) => {
    let newArray = todos.filter(items => items.id !== id)
      setTodos([...newArray])
        setInput("");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-fuchsia-300 ">
     
      <div className="bg-fuchsia-200  md:w-1/2 shadow rounded-3xl p-16">
         
         <h1 className="text-3xl font-bold text-center p-6 underline text-gray-950"> TO-DO APP</h1>
           
           {/* start input div */}
           <div className="mt-5 flex flex-col md:flex-row justify-between gap-4 "> 
              
              <input 
              value={input} 
              type="text" 
              onChange = {(e) => setInput(e.target.value)} 
              placeholder="Add a new task" 
              className="w-[80%] flex-grow text-lg p-2 ml-3 border-b rounded-lg focus:outline-none" />

              <input 
              value={id} 
              type="number" 
              onChange = {(e :any) => setId(e.target.value)} 
              placeholder="Write id"                  
              className="w-[20%] flex-grow p-2 ml-3 border-b rounded-lg focus:outline-none" />

             <button onClick={addTodos}
             className="bg-fuchsia-500 px-4 py-2 rounded-lg hover:bg-fuchsia-400 font-semibold text-purple-950 ">Add Todo</button>          
            
          </div> 

             {/*todo list*/}
          <h1 className="text-center font-bold text-2xl underline p-6 m-4 ">TO-DO LIST</h1>

          <div className="rounded bg-pink-300 grid shadow-lg ">
            
            {
              todos.map((itmes:any, i:any) => {
                return (
                <div className=" shadow p-4" key={i}> 

                  <div className="flex justify-between ">

                     <span className="text-center shadow rounded-full h-6 w-6 my-auto">{i + 1}</span>
                     <span onClick={() => deleteTodo(itmes.id)} className=" rounded-full h-6 w-6 my-auto bg-white cursor-pointer text-red-700 text-center ">x</span>

                  </div>
                  
                  <div className="mt-4 text-lg text-purple-950">{itmes.task}</div>

                  <div>
                    <h2 onClick = {() => editTodos(itmes.id)} className="text-right text-blue-950 p-2 cursor-pointer">Edit</h2>
                    
                  </div>
                </div>
                
                )
              })
            }
            
          </div>    
      </div>
    </div>
  );
}
