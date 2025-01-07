import React from 'react'

const Tags = () => {
    const categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports", "Books", "Toys", "Gadgets"];
  return (
    <div id='tag_container'>
        <h3>Categories</h3>

        <div className="categories">
            {categories.map((item,index)=>(
                <span key={index} >{item}</span>
            ))}
        </div>
    </div>
  )
}

export default Tags