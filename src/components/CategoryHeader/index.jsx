import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

CategoryHeaderComponent.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function CategoryHeaderComponent(props) {
  const { image, category } = props;
  return (
    <div className="category-header">
      <div
        className="category-header__image"
        style={{
          // backgroundImage:
          //   "url(https://curnonwatch.com/media/catalog/category/collection_men_ring.jpg)",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="category-header__container container">
          <h1>{category}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            rhoncus lectus id mattis varius. Duis quis velit elit. Donec
            ultricies, est ut vulputate mollis, nulla ante maximus tortor, ut
            laoreet ipsum dui vel arcu.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeaderComponent;
