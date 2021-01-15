import { Select } from "antd";
import { NavLink } from "react-router-dom";
import * as ultis from "../../utils/";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

const { Option } = Select;

SortByComponent.propTypes = {
  onChange: PropTypes.func,
};

SortByComponent.defaultValue = {
  onChange: null,
};

function SortByComponent(props) {
  const { onChange } = props;

  function handleSortByChange(value) {
    if (!onChange) return;

    onChange(value);
  }

  return (
    <div className="filter-bar container">
      <div className="filter-bar__sort">
        <Select
          className="sort-by"
          defaultValue="default"
          style={{ width: 200 }}
          bordered={false}
          onChange={handleSortByChange}
        >
          <Option value="default">Sort by: Relevance</Option>
          <Option value="ascending">Price: Low to High</Option>
          <Option value="descending">Price: High to Low</Option>
        </Select>
      </div>
      <div className="filter-bar__links">
        {ultis.CATEGORIES.map((category) => (
          <NavLink
            className="filter-bar__link"
            to={`/category/${category.url}`}
            key={category.url}
          >
            {category.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SortByComponent;
