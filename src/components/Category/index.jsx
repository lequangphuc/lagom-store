import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

CategoryComponent.propTypes = {
  image: PropTypes.string.isRequired,
};

function CategoryComponent(props) {
  const { image, title, url } = props;

  return (
    <div>
      <Link
        to={`/category/${url}`}
        className="category"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="category__content">
          <p className="category__content-name">{title}</p>
          <div className="category__content-action">
            BUY NOW <RightOutlined />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryComponent;
