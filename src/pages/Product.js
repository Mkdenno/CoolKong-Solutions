import React from "react";
import { Prod } from "../components/product/Prod";
import { prods } from "../../src/products";

import "./Product.css";
import { Reviews } from "../components/Reviews";

export const Product = () => {
  return (
    <>
      <section className="product-header">
        <div className="prod-bg"> </div>
        <div className="prod-header-content">
          <h1>Our Products</h1>
        </div>
      </section>

      <section className="prod-list-section">
        <h2>Our Products</h2>

        <div className="prod-imgs">
          {prods.map((product) => (
            <Prod
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <Reviews />
    </>
  );
};
