import React, { useEffect, useState } from "react";

import "./style.scss";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import * as ultis from "../../utils/";
import CategoryComponent from "../../components/Category";
import ProductComponent from "../../components/Product";
import productApi from "../../api/productApi";

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        limit: 4,
      };
      const products = await productApi.getAll(params);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="categories">
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

      {/* Other Feature Products */}
      <div className="feature-products">
        <div className="feature-products__head">
          <h3>NEW PRODUCTS</h3>
          <div className="feature-products__head-action">
            <Link to="/category">
              DISCOVER MORE <RightOutlined />
            </Link>
          </div>
        </div>

        <Row className="feature-products__list" justify="center">
          {products.map((product) => (
            <Col
              key={product.id}
              className="feature-products__item"
              span={6}
              md={6}
              sm={12}
              xs={12}
            >
              <ProductComponent product={product} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Our Mission */}
      <Row justify="center" className="mission container">
        <Col span={8} md={8} xs={24} className="mission__image">
          <img src={"/images/mission.jpg"} />
        </Col>
        <Col span={8} md={8} xs={24} className="mission__content">
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
