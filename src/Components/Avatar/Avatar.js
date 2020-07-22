import React from 'react'

import avatar from '../Assets/vp.png';

import '../Avatar/Avatar.css'

const Avatar = () => {
    return (
        <div>
            <img
             src={avatar}
             alt="Avatar"
             className="avatar"
             />
            
        </div>
    )
}

export default Avatar;
