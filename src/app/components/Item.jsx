import React from 'react'

const Item = ({img, name, price}) => {
  return (
    <div id='item'>
        <img src={img} alt="" />
        <p className='name'>{name}</p>
        <p className="price">${price}</p>
    </div>
  )
}

export default Item