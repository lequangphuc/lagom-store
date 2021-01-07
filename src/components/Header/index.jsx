import React, { useState } from "react";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";

import { Row, Col, Drawer, Button } from "antd";
import {
  ShoppingOutlined,
  MenuOutlined,
  CloseOutlined,
  HeartOutlined,
} from "@ant-design/icons";

function HeaderComponent() {
  const [visibleNav, setVisibleNav] = useState(false);

  const onShowNav = () => {
    setVisibleNav(true);
  };
  const onCloseNav = () => {
    setVisibleNav(false);
  };

  const CATEGORIES = [
    { id: "electronics", name: "electronics" },
    { id: "jewelery", name: "jewelery" },
    { id: "men-clothing", name: "men clothing" },
    { id: "women-clothing", name: "women clothing" },
  ];

  return (
    <header>
      <Row align="middle" justify="space-between" className="header">
        <Col span={8} className="header__navigation header__nav-primary">
          <Button
            size="large"
            className="hamburger-button"
            icon={<MenuOutlined />}
            onClick={onShowNav}
          />
          <Drawer
            className="hambuger-content"
            title={
              <Button
                className="hamburger-button"
                icon={<CloseOutlined />}
                onClick={onCloseNav}
              >
                Close
              </Button>
            }
            placement="left"
            closable={false}
            onClose={onCloseNav}
            visible={visibleNav}
          >
            {CATEGORIES.map((category) => (
              <NavLink
                className="hambuger-content__link"
                to={`category/${category.id}`}
                key={category.id}
                onClick={onCloseNav}
              >
                {category.name}
              </NavLink>
            ))}
          </Drawer>
        </Col>
        <Col span={8} className="header__logo">
          <Link to="/">
            <img src="/images/lagomLogo.png" width="150" alt="logo" />
          </Link>
        </Col>
        <Col span={8} className="header__navigation header__nav-secondary">
          {/* <NavLink to="/wishlist" className="wishlist" style={{ padding: 0 }}>
            <HeartOutlined />
            &nbsp;
            <small>(0)</small>
          </NavLink> */}
          <NavLink to="/bag">
            <ShoppingOutlined />
            &nbsp; BAG
          </NavLink>
        </Col>
      </Row>
    </header>
  );
}

export default HeaderComponent;
