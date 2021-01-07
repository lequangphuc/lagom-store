import React from "react";
import "./style.scss";

import { Row, Col, Button, Divider, List } from "antd";
import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";

const desc = [
  {
    title: "Lorem ipsum dolor sit amet",
    data: "ELIT",
  },
  {
    title: "consectetur adipiscing elit",
    data: "40MM",
  },
  {
    title: "Duis feugiat dolor elit",
    data: "3ATM",
  },
  {
    title: "Phasellus ac sapien libero",
    data: "LIBERO",
  },
];

function ProductDetail() {
  return (
    <div className="product-detail">
      <Row className="product-detail__section container">
        <Col
          span={12}
          xs={24}
          lg={12}
          className="product-detail__section-image"
        >
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        </Col>
        <Col
          span={12}
          xs={24}
          lg={12}
          className="product-detail__section-detail"
        >
          <div className="product-info">
            <small>CATEGORY</small>
            <h1 className="product-info__name">PRODUCT</h1>
            <p className="product-info__price">$ 300</p>
          </div>
          <Divider />
          <div className="product-actions">
            <Button
              className="product-actions__wishlist"
              icon={<HeartOutlined />}
              style={{ marginRight: "24px" }}
              block
            >
              Add to Wishlist
            </Button>
            <Button
              className="product-actions__bag"
              icon={<ShoppingOutlined />}
              block
            >
              Add to Bag
            </Button>
          </div>
          <Divider />
          <div className="product-desc">
            <h3>DETAILED SPECIFICATIONS</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ac sapien libero. Integer sed sem vel quam hendrerit sodales. Sed
              vulputate iaculis nibh, sed ullamcorper mauris dictum et.
            </p>
            <List
              dataSource={desc}
              renderItem={(item) => (
                <List.Item
                  style={{ color: "rgba(0, 0, 0, 0.6)", display: "flex" }}
                >
                  {item.title}
                  <div style={{ color: "#212121", fontWeight: "normal" }}>
                    {item.data}
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetail;
