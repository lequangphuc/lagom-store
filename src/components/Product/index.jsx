import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

import { Button } from "antd";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";

ProductComponent.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProductComponent(props) {
  const { product } = props;

  return (
    <div className="product">
      <div className="product__image">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </div>
      <div className="product__info">
        <small className="product__info-category">
          {/* {product.category} */}
          CATEGORY
        </small>
        <p className="product__info-name">PRODUCT</p>
        <p className="product__info-price">{/* {product.price} */}$ 300</p>
      </div>
      <Button className="product__action-wishlist" icon={<HeartOutlined />} />
      <div className="product__action">
        <Button
          className="product__action-bag"
          block
          icon={<ShoppingOutlined />}
        >
          ADD TO BAG
        </Button>
      </div>
    </div>
  );
}

export default ProductComponent;
