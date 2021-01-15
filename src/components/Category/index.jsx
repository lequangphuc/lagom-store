import { RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

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
