import "../styles/Cart.css";
import { useState, useEffect } from "react";
import { API_URL } from "../globalConstant.js";

function Cart() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/order/${window.localStorage.getItem("email")}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "x-auth-token": window.localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setOrder(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cart-container">
      <div className="cart-products-container">
        <div className="cart-product-title">
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>TOTAL</span>
        </div>
        <hr />
        {order &&
          order.map(() => {
            return (
              <div>
                <div className="cart-product">
                  <div className="order-product">
                    <img src="" alt="" className="cart-product-img" />
                    <p>Name</p>
                  </div>
                  <span>₹100</span>
                  <span>Btn</span>
                  <span>total</span>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
      <div className="cart-purchase-detail">
        <p>Cart Total</p>
        <div>
          <p>Subtotal :₹100 </p>
        </div>
        <div>
          <p>
            Shipping :There are no shipping methods available. Please double
            check your address, or contact us if you need any help.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export { Cart };
