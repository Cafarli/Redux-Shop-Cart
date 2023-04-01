import "./cart.css";

export default function Cart(props) {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
