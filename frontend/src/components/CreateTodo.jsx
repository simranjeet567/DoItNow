// this code is used to create the todos:

import { useState } from "react";

export function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10 
        }} onClick={() => {
            //or use the axios library:
            axios.post("http://localhost:3000/todo", {
                title: title,
                description: description
            })
            
                // fetch("http://localhost:3000/todo", {
                //     method: "POST",
                //     body: JSON.stringify({
                //         title: title, 
                //         description: description
                //     }),
                //     headers: {
                //         "Content-type": "application/json"
                //     }
                // })
                    .then(async function(res) {
                        const json = await res.json();
                        alert("ToDo Added");
                })
            }}>Add a todo</button>
    </div>
}