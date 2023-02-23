import Get from './components/Get';
import './components/header.css'
import { useState, useEffect } from 'react';
import { AddData } from './components/AddData';

function App() {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () =>{
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }

    const onAdd = async (name, email) =>{
      await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) =>{
         if(res.status !== 201){
          return 
         }else{
          return res.json();
         }
      })
      .then((data) =>{
        setUsers((users) => [...users, data]);
      })
      .catch((err) =>{
        console.log(err);
      })
    }

     const onDelete = async (id) =>{
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE'
      })
      .then((res) =>{
        if(res.status !== 200){
          return
        }else{
          setUsers(users.filter((user) =>{
            return user.id !== id;
          }))
        }
      })
      .catch((err) => {
        console.log(err);
      })
     }

  return (
    <div className='header'>
      <h2>
        CRUD Application using JSONPlaceholder
      </h2>
      
      <br/>

      <AddData onAdd={ onAdd }/>

      <div>
        {
          users.map((item) => (
            <Get id={item.id}
               key={item.id}
               name={item.name}
               email={item.email}
               onDelete = { onDelete }
               />
          ))
        }

      </div>
    </div>

  );
}

export default App;
