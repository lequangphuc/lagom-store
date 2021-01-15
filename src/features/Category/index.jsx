import { Col, Row } from "antd";
import React from "react";
import CategoryComponent from "../../components/Category";
import * as ultis from "../../utils/";

Category.propTypes = {};

function Category(props) {
  return (
    <div>
      <div className="container">
        <Row justify="center" className="categories__list">
          {ultis.CATEGORIES.map((category) => (
            <Col key={category.url} span={12} xs={24} sm={24} xl={12}>
              <CategoryComponent
                url={category.url}
                title={category.title}
                image={category.image}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Category;
