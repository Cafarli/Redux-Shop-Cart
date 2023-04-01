import "./shop.css";
import { useEffect, useState } from "react";
import SingleItem from "../singleItem/singleItem";
import Cart from "../cartPage/cart";

export default function Shop() {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <div className="Shop">
      <div className="products">
        {product !== undefined &&
          !!product.length &&
          product.filter((p,i)=>i<10).map((pr, index) => {
            console.log(pr);
            return (
              <SingleItem
                key={index}
                title={pr["title"]}
                price={pr["price"]}
                desc={pr["description"]}
                photo={pr["images"]}
              />
            );
          })}
      </div>
      <div className="cart">
          <Cart />
      </div>
    </div>
  );
}
