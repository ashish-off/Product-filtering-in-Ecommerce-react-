import React, { useEffect, useState } from "react";
import "./index.css";
import Navigation from "./Navigation/nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./Components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // input filtering
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // radio filtering
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };


  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  //button filtering
  const handleClick = (e) => {
    setSelectedCompany(e.target.value);
  };

  function filterData(products, category, color, company, price, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // category filter
    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category
      );
    }

    // color filter
    if (color) {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === color
      );
    }

    // company filter
    if (company) {
      filteredProducts = filteredProducts.filter(
        (product) => product.company === company
      );
    }

    // price filter
    if (price) {
      filteredProducts = filteredProducts.filter(
        (product) => product.newPrice <= price
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  //calling filterData
    const result = filterData(products, selectedCategory, selectedColor, selectedCompany, selectedPrice, query)


  return (
    <>
      <Sidebar
        handleCategoryChange={handleCategoryChange}
        handleColorChange={handleColorChange}
        handlePriceChange={handlePriceChange}
      />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
