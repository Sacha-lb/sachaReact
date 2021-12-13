import React, {useEffect, useState} from "react";

export default function Count(){
    const [todolist, setTodolist] = useState(["test","test2"])
    const [task, setTask] = useState([""])
    const [lastItem, setLastItem] = useState([""])

    useEffect(() => {
        localStorage.setItem("todos", todolist)
    }, [todolist])

    useEffect(() => {
        setLastItem(todolist.length - 1) 
    }, [todolist])

    function addTodo (item){
        setTodolist([...todolist, item])
    }

    function deleteTodo(removeIndex){
        setTodolist(todolist.filter(function(item,index){
            if(index !== removeIndex) return item
        }))
    }

    return (
        <div>

            <input name="item" value= {task} onInput={e=>setTask(e.target.value)} type="text" placeholder="enter task"></input>
            <button onClick={() => addTodo (task)}>add</button>

            <h1>To do :</h1>
            { todolist.map((item,i) => {
                return (
                <p style = {{ color : i === lastItem ? "red" : ""}} key={i}>{item} <span onClick={() => deleteTodo (i)}>Supprimer</span></p>
                )
            })}

            

        </div>
    )
}