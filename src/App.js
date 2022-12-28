import React,{ useState , useEffect } from "react";
import './App.css';
export default function App(){
  const [data,setData]  = useState([])
  const getData=async()=>{
    const Response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const Result = await Response.json();
    setData(Result)
    console.log(data)
  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>City.address</th>
          <th>Zipcode</th>
          <th>Phone</th>
          <th>CompanyName</th>
        </tr>
        </table>
        {
          data.map((item,index)=>{
            return(
              <table>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td>{item.phone}</td>
                <td>{item.company.name}</td>
              </tr>
              </table>
            )
          })
        }
      
    </div>
  )
}

