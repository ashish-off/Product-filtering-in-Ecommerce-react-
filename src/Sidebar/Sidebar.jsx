import React from 'react'
import "./Sidebar.css"
import { IoCartOutline } from "react-icons/io5";
import Category from "./Category/Category";
import Price from "./Price/Price"
import Colors from "./Colors/Colors"

const Sidebar = ({handleCategoryChange, handleColorChange, handlePriceChange}) => {
  
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1><IoCartOutline /></h1>
      </div>

      <Category handleChange={handleCategoryChange} />    
      <Price handleChange={handlePriceChange} />
      <Colors handleChange={handleColorChange} />
    </section>
    </>
  )
}

export default Sidebar