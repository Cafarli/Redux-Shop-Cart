import "./cart.css";
import { removeCartAction } from "../../redux/actions/removeCartAction";
import { useDispatch } from "react-redux";

export default function Cart(product) {
  console.log("product in cart",product);
  const dispatch = useDispatch();
  return (
    <div className="Cart">
      <h2>Shop Cart</h2>
      <div className="cartTable">
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Price</td>
              <td>Photo</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.pTitle}</td>
              <td>{product.pPrice}</td>
              <td>{product.pPhoto}</td>
              <td><button onClick={()=>  dispatch(removeCartAction(product.pId))}>Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
