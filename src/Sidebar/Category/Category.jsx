import React from 'react'
import "./Category.css"

const Category = () => {
  return (
    <div>
      <h2 className="sidebar-title">
        <div>

          <label className="sidebar-label-container">
            <input type="radio" name='test' />
            <span className='checkmark'></span>All
          </label>

          <label className="sidebar-label-container">
            <input type="radio" name='test' />
            <span className='checkmark'></span>Sneakers
          </label>

          <label className="sidebar-label-container">
            <input type="radio" name='test' />Flats
            <span className='checkmark'></span>
          </label>

          <label className="sidebar-label-container">
            <input type="radio" name='test' />
            <span className='checkmark'></span>Sandles
          </label>

          <label className="sidebar-label-container">
            <input type="radio" name='test' />
            <span className='checkmark'></span>Heels
          </label>

        </div>
      </h2>
    </div>
  )
}

export default Category