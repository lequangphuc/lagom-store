import { HeartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button, Col, Divider, List, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import "./style.scss";

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
  let { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await productApi.get(productId);
      setProduct(product);
    };

    fetchProduct();
  });

  return (
    <div className="product-detail">
      <Row className="product-detail__section container">
        <Col
          span={12}
          xs={24}
          lg={12}
          className="product-detail__section-image"
        >
          <img src={product.image} />
        </Col>
        <Col
          span={12}
          xs={24}
          lg={12}
          className="product-detail__section-detail"
        >
          <div className="product-info">
            <small>{product.category}</small>
            <h1 className="product-info__name">{product.title}</h1>
            <p className="product-info__price">$ {product.price}</p>
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
            <p>{product.description}</p>
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
