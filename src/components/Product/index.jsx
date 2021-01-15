import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

ProductComponent.propTypes = {
  product: PropTypes.object,
};

ProductComponent.propTypes = {
  product: {},
};

function ProductComponent(props) {
  const { product } = props;

  return (
    <Link to={`/product/${product.id}`} className="product">
      <div className="product__image">
        <img src={product.image} />
      </div>
      <div className="product__info">
        <small className="product__info-category">{product.category}</small>
        <p className="product__info-name">
          {product.title.substring(0, 10)}...
        </p>
        <p className="product__info-price">$ {product.price}</p>
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
    </Link>
  );
}

export default ProductComponent;
