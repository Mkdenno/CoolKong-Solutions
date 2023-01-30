import React from "react";
import { Prod } from "../components/product/Prod";
import { prods } from "../../src/products";

import "./Product.css";
import { Reviews } from "../components/Reviews";
import { PartnerImg } from "../components/PartnerImg";

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

      <PartnerImg
        slides={6}
        isDotsVisible={false}
        padding="2rem 8rem"
        width="100%"
        imgWidth="100px"
      />
      <Reviews />
    </>
  );
};
