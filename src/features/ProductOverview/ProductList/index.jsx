import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Product from "../../../components/Product";

import { Row, Col } from "antd";

ProductList.propTypes = {
  listProduct: PropTypes.array,
};

ProductList.defaultProps = {
  listProduct: [],
};

function ProductList(props) {
  const { listProduct } = props;

  return (
    <Row className="product-list container" justify="center">
      {listProduct.map((product) => (
        <Col className="feature-products__item" span={6} md={6} sm={12} xs={12}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
