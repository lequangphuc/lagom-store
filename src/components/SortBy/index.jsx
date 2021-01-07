import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

import { Select } from "antd";

const { Option } = Select;

SortBy.propTypes = {
  sortBy: PropTypes.string,
  onChange: PropTypes.func,
};

SortBy.defaultValue = {
  sortBy: "default",
  onChange: null,
};

function SortBy(props) {
  const { sortBy, onChange } = props;

  function handleSortByChange(value) {
    if (onChange) return;

    onChange(value);
  }

  return (
    <div className="container">
      <Select
        className="sort-by"
        defaultValue="default"
        style={{ width: 200 }}
        bordered={false}
        onChange={() => handleSortByChange}
      >
        <Option value="default">Sort by: Relevance</Option>
        <Option value="ascending">Price: Low to High</Option>
        <Option value="descending">Price: High to Low</Option>
      </Select>
    </div>
  );
}

export default SortBy;
