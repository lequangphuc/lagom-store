import {
  CloseOutlined,
  MenuOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Row, Badge } from "antd";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import * as ultis from "../../utils";
import "./style.scss";

function HeaderComponent() {
  const [visibleNav, setVisibleNav] = useState(false);

  const onShowNav = () => {
    setVisibleNav(true);
  };
  const onCloseNav = () => {
    setVisibleNav(false);
  };

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
            {ultis.CATEGORIES.map((category) => (
              <NavLink
                className="hambuger-content__link"
                to={`/category/${category.url}`}
                key={category.url}
                onClick={onCloseNav}
              >
                {category.title}
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
            <ShoppingOutlined className="bag-icon" />
            <span className="header__navigation-bag-text">&nbsp;BAG (2)</span>
          </NavLink>
        </Col>
      </Row>
    </header>
  );
}

export default HeaderComponent;
