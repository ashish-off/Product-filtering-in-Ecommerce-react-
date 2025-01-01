import React from 'react'
import './Price.css'
import Input from '../../Components/Input'

const Price = ({handleChange}) => {
  
  return (
  <>
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
          <input onChange={handleChange} value="" type="radio" name="test2" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value= {50}
          title="< $50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value= {100}
          title="< $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value= {150}
          title="< $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value= {200}
          title="< $200"
          name="test2"
        />

    </div>
  </>
  )
}

export default Price