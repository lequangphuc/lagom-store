import { Divider } from "antd";
import PropTypes from "prop-types";
import React from "react";
import Product from "../Product";

ProductList.propTypes = {
  listProduct: PropTypes.array,
};

ProductList.defaultProps = {
  listProduct: [],
};

function ProductList(props) {
  const { listProduct } = props;
  return (
    <div className="list-product-inbag">
      {listProduct.map((product) => (
        <React.Fragment key={product.id}>
          <Product product={product} />
          <Divider />
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProductList;
