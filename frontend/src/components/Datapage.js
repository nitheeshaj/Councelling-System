import React, { useEffect,useState} from 'react'
import axios from 'axios'
const DataFetch = () => {
    const[posts,setPosts]=useState([])
    const[id,setid]=useState(1)
    const[buttonid,setbuttonid]=useState(1)
    useEffect(()=>
    {
axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
.then(res=>{
    console.log(res)
    setPosts(res.data)
})
    },[buttonid])
    function handleClick()
    {

        setbuttonid(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
        <button onClick={handleClick}>FetchPost</button>
        {posts.title}
       {/* <ul>
            {
                posts.map(post=>(

                 <li key='id'>{post.title} </li>  
                ))
            }
        </ul>
        */}  
        </div>
  )
}
export default DataFetch