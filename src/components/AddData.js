import React from 'react'

export const AddData = ({ onAdd }) => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onAdd(e.target.name.value, e.target.email.value);
        e.target.name.value = "";
        e.target.email.value = "";
    }

  return (
    <div>
        <form onSubmit={ onSubmitHandler }>
            <h3>Add User</h3>
            <input placeholder='Name' name="name"/>
            <input placeholder='Email' name="email"/>
            <button onSubmit={ onSubmitHandler }>Add</button>
            <hr/>
            <br/><br/>
        </form>
    </div>
  )
}
