import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";

import Category from "../../components/Category";
import ProductComponent from "../../components/Product";

Homepage.propTypes = {};

function Homepage(props) {
  return (
    <div className="container">
      <div className="categories">
        <Row justify="center" className="categories__list">
          <Col span={12} xs={24} sm={24} xl={12}>
            <Category categoryThumbnail={"/images/category-1.jpg"} />
          </Col>
          <Col span={12} xs={24} sm={24} xl={12}>
            <Category categoryThumbnail={"/images/category-1.jpg"} />
          </Col>
        </Row>

        <Row justify="center" className="categories__list">
          <Col span={12} xs={24} sm={24} xl={12}>
            <Category categoryThumbnail={"/images/category-1.jpg"} />
          </Col>
          <Col span={12} xs={24} sm={24} xl={12}>
            <Category categoryThumbnail={"/images/category-1.jpg"} />
          </Col>
        </Row>
      </div>

      {/* Other Feature Products */}
      <div className="feature-products">
        <div className="feature-products__head">
          <h3>MEN'S BEST SELLERS</h3>
          <div className="feature-products__head-action">
            <a>
              DISCOVER MORE <RightOutlined />
            </a>
          </div>
        </div>

        <Row className="feature-products__list" justify="center">
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
        </Row>
      </div>

      {/* Other Feature Products */}
      <div className="feature-products">
        <div className="feature-products__head">
          <h3>MEN'S BEST SELLERS</h3>
          <div className="feature-products__head-action">
            <a>
              DISCOVER MORE <RightOutlined />
            </a>
          </div>
        </div>

        <Row className="feature-products__list" justify="center">
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
          <Col
            className="feature-products__item"
            span={6}
            md={6}
            sm={12}
            xs={12}
          >
            <ProductComponent />
          </Col>
        </Row>
      </div>

      {/* Our Mission */}
      <Row justify="center" className="mission container">
        <Col span={8} className="mission__image">
          <img src={"/images/mission.jpg"} />
        </Col>
        <Col span={8} className="mission__content">
          <h3 className="mission__content-title">OUR NEW MISSION</h3>
          <p className="mission__content-desc">
            We inspire your journey to perform at your best. We study the
            strength with which you operate to deliver the most innovative
            uniforms in the world.
          </p>
          <p className="mission__content-desc">
            Our core values — empowering, authentic, intimate, raw & real,
            inclusive and innovative — represent Lagom's heart and soul.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Homepage;
