import React from 'react'
import './header.css'

function Get({id, email, name, onDelete}) {

    const onDeleteHandler = () => {
        onDelete(id);
    }

  return (
    <div className='list'>
        <span>{ name }</span>
        <span>{ email }</span>
        <span>
            <button>Edit</button>
            <button onClick={ onDeleteHandler }>Delete</button>
        </span>
    </div>
  )
}

export default Get