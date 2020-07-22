import React from 'react'

import '../TodoList/TodoList.css'

export default function TodoList() {
    let todo = ['Belajar intro React JS', 'Belajar Component React JS', 'Belajar Route React JS']
    
    let data = todo.map(el => {
        return <li>{el}</li>
    })
    
    return (
        <div>
            <h3> Todo List </h3>
            <div className="nakal">{data}</div>
        </div>
    )
}


