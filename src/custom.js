import React, {useState,useEffect} from "react";
// import { data } from "jquery";
function MyProgress() {
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState({});
    const apiGet = () => {
        fetch("http://localhost:3000/user.json")
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            setData(result);
        });
    };
    // useEffect(() =>{
    //     apiGet();
    // },[])
    const handleChange=(event)=>{
        event.persist();
        setInputs((inputs)=>({
            ...inputs,

            [event.target.name]:event.target.value,
        }));
    };
    const handleSubmit= (event)=> {
        event.preventDefault();
        apiPost();
        console.log(inputs);
    }
    //Post Method
    const apiPost = async () => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: inputs.title,
                body: inputs.body,
                userId: parseInt(inputs.userId),
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    };
    return (
        <div>
            MY API <br />
            <button onClick={apiGet}>Fetch API</button>
            <br/>
            {/* <pre>{JSON.stringify(data,null,2)}</pre> */}
            <div>
                <ul>
                  {data.map((item) => (
                    <li key={item.id}>{item.userId},{item.title}</li>
                  ))}
                </ul>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="title" onChange={handleChange}/><br/>
                    <input type="text" name="body" placeholder="body" onChange={handleChange} /><br/>
                    <input type="number" name="userId" placeholder="userId" onChange={handleChange} /><br />
                    <input type="submit" name="submit" onChange={handleChange}/>
                </form>
            </div>
        </div>
    );

}
export default MyProgress;