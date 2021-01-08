import React from "react";
import PropTypes from "prop-types";
import NotFound from "../../components/NotFound";

Bag.propTypes = {};

function Bag(props) {
  return (
    <div>
      <br />
      <h1 className="container">SHOPPING BAG</h1>
      <NotFound
        status="403"
        title="UNDER CONSTRUCTION"
        desc="Sorry, we are still working on it."
      />
    </div>
  );
}

export default Bag;
