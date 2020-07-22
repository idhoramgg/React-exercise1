import React from 'react'
import "../StudentInfo/StudentInfo.css"

export default function StudentInfo({name, status, bio}) {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{status}</h4>
            <p>{bio}</p>
        </div>
    )
}
