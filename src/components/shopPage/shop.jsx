import "./shop.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleItem from "../singleItem/singleItem";
import { removeCartAction } from "../../redux/actions/action";

export default function Shop() {
  const addedProducts = useSelector((state) => state.add.products);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

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
          product
            .filter((p, i) => i < 10)
            .map((pr, index) => {
              return (
                <SingleItem
                  key={index}
                  id={pr["id"]}
                  title={pr["title"]}
                  price={pr["price"]}
                  desc={pr["description"]}
                  photo={pr["images"]}
                />
              );
            })}
      </div>
      <div className="cart">
        <h2>Shop Cart</h2>
        <div className="cartTable">
          <table>
            <thead>
              <tr>
                <th className="td-title">Title</th>
                <th className="td-price">Price</th>
                <th className="td-img">Photo</th>
                <th className="td-action">Action</th>
              </tr>
            </thead>
            <tbody>
              {addedProducts !== undefined &&
                !!addedProducts.length &&
                addedProducts
                  .filter((p, i) => i >= 1)
                  .map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="td-title">{item.pTitle}</td>
                        <td className="td-price">${item.pPrice}</td>
                        <td className="td-img">
                          <img src={item.pPhoto} alt="product"></img>
                        </td>
                        <td className="td-action">
                          <button
                            onClick={() => {
                              dispatch(removeCartAction(item.pId));
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
