import React, { useState } from "react";
import "./index.css";
import Navigation from "./Navigation/nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./Components/Card";
const App = () => {
  const [selectedCategory, setSlectedCategory] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // input filtering
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // radio filtering
  const handleChange = (e) => {
    setSlectedCategory(e.target.value);
  };

  //button filtering
  const handleClick = (e) => {
    setSlectedCategory(e.target.value);
  };

  function filterData(products, slected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // slected filter

    if (slected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === slected ||
          color === slected ||
          company === slected ||
          newPrice === slected ||
          title === slected
      );
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice = {newPrice}
      prevPrice = {prevPrice}
      />
    ))
  }

  //calling filterData
  const result = filterData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange = {handleChange}/>
      <Navigation query = {query} handleInputChange = {handleInputChange} />
      <Recommended handleClick = {handleClick} />
      <Products result = {result}/>
    </>
  );
};

export default App;
