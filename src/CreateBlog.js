import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuth]=useState('Abhiram Srivathsa K H');
    const [isload,setisload]=useState(false);
    const his= useHistory();
    const handelSubmit=(e) =>{
        e.preventDefault();
        const blog={title,body,author}
        setisload(true);

        fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers:{"Content-Type": "application/json "},
            body: JSON.stringify(blog)
            

        }).then(()=>  
        {
            console.log("blog Added");
            setisload(false);
            his.push('/');
        })
    }
    return ( 
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handelSubmit}>
                <label>Blog Title :</label>
                <input 
                type="text"
                required
                value={title}
                onChange={((e)=>{setTitle(e.target.value)})}
                />
                <label>Blog content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <select
                value = {author}
                onChange={(e)=>setAuth(e.target.value)}
                >
                    <option value ="Abhiram Srivathsa K H">Abhiram Srivathsa K H</option>
                    <option value="Others">Others</option>
                </select>
                {!isload && <button>Add Blog</button>}
                {isload && <button disabled>Adding</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </div>
     );
}
 
export default Create;