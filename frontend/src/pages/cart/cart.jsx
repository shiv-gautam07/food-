import React, { useContext } from "react";
import "./cart.css";
import { Storecontext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";
import { getBaseApiUrl } from "../../misc";

const cart = () => {
  const { cartitems, dishes, removefromcart, getTotalCartAmount } =
    useContext(Storecontext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {dishes.rows.map((item, index) => {
          if (cartitems[item.id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={getBaseApiUrl() + "/" + item.imageUrl} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartitems[item.id]}</p>
                  <p>${item.price * cartitems[item.id]}</p>
                  <p onClick={() => removefromcart(item.id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
