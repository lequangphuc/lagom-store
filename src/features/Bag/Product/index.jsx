import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

function Product(props) {
  const { product } = props;
  return (
    <div className="product-inbag">
      <Link to={`/product/${product.id}`}>
        <div
          style={{ backgroundImage: `url("${product.image}")` }}
          className="product-inbag__image"
        ></div>
      </Link>

      <div className="product-inbag__main">
        <div className="product-inbag__main-title">
          <h4>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h4>
          <p style={{ width: "100px", textAlign: "right" }}>
            $ {product.price}
          </p>
        </div>
        <div className="product-inbag__main-details">
          <p>Category: {product.category}</p>
          <p>Product No.: {product.id}</p>
        </div>
        <div className="product-inbag__main-actions">
          <div className="quantity">
            <input className="input-quantity" type="number" value={2} />
          </div>
          <Button className="btn-remove" icon={<DeleteOutlined />}></Button>
        </div>
      </div>
    </div>
  );
}

export default Product;
