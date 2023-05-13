import React ,{useState, useEffect} from "react";

const FetchingData = () =>{
    const [records, setRecords] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(respone => respone.json())
        .then(data = setRecords(data))
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <ul>
                {records.map()}
            </ul>
        </div>
    )
}