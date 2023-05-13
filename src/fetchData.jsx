// import React ,{useState, useEffect} from "react";

// const FetchData = () =>{
//     const [records, setRecords] = useState([])

//     useEffect(() =>{
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(respone => respone.json())
//         .then(data => setRecords(data))
//         .catch(err => console.log(err))
//     },[])

//     return(
//         <div>
//             <ul>
//                 {records.map((list,index)=>(
//             <li key={index}>{list.id}, {list. name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default FetchData