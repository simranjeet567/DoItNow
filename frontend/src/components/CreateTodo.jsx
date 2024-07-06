// this code is used to create the todos:

export function CreateTodo(props) {
    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br/>

        <input id="description" style={{
            padding: 10,
            margin: 10
        }}type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input><br/>

        <button style={{
            padding: 10,
            margin: 10 
        }} onClick={() => {
                fetch("http://localhost:3000/todos", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title, 
                        description: description
                    }),
                    headers: {
                        "contentType": "application/json"
                    }
                })
                .then(async function(res) {
                    const json = await res.json();
                    alert("ToDo Added");
                })
            }}>Add a To-Do</button>
    </div>
}