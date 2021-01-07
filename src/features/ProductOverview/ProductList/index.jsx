import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Product from "../../../components/Product";

import { Row, Col } from "antd";

ProductList.propTypes = {};

function ProductList(props) {
  return (
    <Row className="product-list container" justify="center">
      <Col className="feature-products__item" span={6} md={6} sm={12} xs={12}>
        <Product />
      </Col>
    </Row>
  );
}

export default ProductList;
