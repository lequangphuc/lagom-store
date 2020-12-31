import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";

import { RightOutlined } from "@ant-design/icons";

CategoryComponent.propTypes = {
  categoryThumbnail: PropTypes.string.isRequired,
};

function CategoryComponent(props) {
  const { categoryThumbnail } = props;

  return (
    <Link
      to="#"
      className="category"
      style={{ backgroundImage: `url(${categoryThumbnail})` }}
    >
      <div className="category__content">
        <p className="category__content-name">WOMAN CLOTHING</p>
        <div className="category__content-action">
          BUY NOW <RightOutlined />
        </div>
      </div>
    </Link>
  );
}

export default CategoryComponent;
