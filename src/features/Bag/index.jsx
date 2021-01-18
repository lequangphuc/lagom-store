import { GoogleCircleFilled } from "@ant-design/icons";
import { Button, Divider } from "antd";
import React, { useState } from "react";
import ProductList from "./ProductList";
import "./style.scss";

function Bag() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ]);

  return (
    <div className="bag">
      <h1>Your Shopping Bag</h1>

      <div className="container">
        <div className="bag__products">
          <ProductList listProduct={product} />
        </div>

        <div className="bag__sidebar">
          <div className="order-summary">
            <div className="order-summary__group order-summary__bold">
              <h3>subtotal:</h3>
              <span>
                ${" "}
                {product.reduce((subtotal, product) => {
                  return subtotal + product.price;
                }, 0)}
              </span>
            </div>
            <div className="order-summary__group">
              <h3>delivery:</h3>
              <span>free</span>
            </div>
            <div className="order-summary__group">
              <h3>tax total:</h3>
              <span>.incl</span>
            </div>
            <Divider />
            <div className="order-summary__group order-summary__bold">
              <h3>total:</h3>
              <span>$ 209.00</span>
            </div>
          </div>
          <div className="order-actions">
            <Button className="order-actions__checkout" block>
              Checkout
            </Button>
            <span>OR</span>
            <div className="order-actions__other">
              <Button className="order-actions__paypal" block>
                Paypal
              </Button>
              <Button
                icon={<GoogleCircleFilled />}
                className="order-actions__gpay"
                block
              >
                Pay
              </Button>
            </div>
          </div>
          <div className="order-desc">
            By clicking the above button and placing the order you accept the{" "}
            <a>Terms Conditions</a> and <a>Privacy Policy</a> of LAGOM store.
          </div>
        </div>
      </div>

      {/* <br />
      <h1 className="container">SHOPPING BAG</h1>
      <NotFound
        status="403"
        title="UNDER CONSTRUCTION"
        desc="Sorry, we are still working on it."
      /> */}
    </div>
  );
}

export default Bag;
