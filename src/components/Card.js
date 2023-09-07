import React from 'react'

const Card = ({ item }) => {
    // console.log(item.albumId)
    return (
        <div>
            <div className='flex1'>
                <img src={item.url} className='imageItem' alt="" />
                <span className='title'> ⭐️ {item.title}</span>
            </div>
        </div>
    )
}

export default Card