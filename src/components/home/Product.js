import React, { useEffect, useState } from "react";
import {
  getAllList,
  getLimitedList,
  prodHeader,
  products,
} from "../../../src/products.js";
import "./Product.css";

export const Product = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [allBtnClicked, setAllBtnClicked] = useState(false);
  const [data, setData] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All industries");

  useEffect(() => {
    if (!isClicked) {
      setData(getLimitedList());
    }
  }, [isClicked]);

  const filterCategories = (item) => {
    handleCategoryClick(item);

    const result = products.filter((curr) => {
      return curr.category === item;
    });

    if (item === "All industries") {
      setData(getLimitedList());
    } else {
      setData(result);
    }
  };

  const handleCategoryClick = (category) => {
    setIsClicked(true);
    setActiveCategory(category);
    setAllBtnClicked(false);
  };

  const handleAllClicked = () => {
    setData(getAllList());
    setActiveCategory("All industries");
    setAllBtnClicked(true);
  };

  return (
    <>
      <div className="container">
        <div className="product-home-header">
          {prodHeader.map((prod) => {
            return (
              <p
                onClick={() => filterCategories(prod.title)}
                className={activeCategory === prod.title ? "active" : ""}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={prod.icon}
                  alt="icon"
                  width={25}
                  style={{
                    paddingRight: ".4rem",
                    color: activeCategory === prod.title ? "#AB0E12" : "black",
                  }}
                />
                {prod.title}
              </p>
            );
          })}
        </div>

        <div className="product-home-list">
          {data.map((product) => {
            return (
              <a href={product.url} target="_blank">
                <div className="prod-home-card">
                  <p>{product.title}</p>
                  <img
                    src="./images/vuesax.svg"
                    alt="icon"
                    className="icon-direction"
                  />
                </div>
              </a>
            );
          })}
        </div>

        <div className="product-home-button">
          {!allBtnClicked && (
            <button onClick={() => handleAllClicked()}>See all Solutions</button>
          )}
        </div>
      </div>
    </>
  );
};
