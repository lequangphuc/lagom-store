import { CarOutlined, LikeOutlined, SafetyOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import "./style.scss";

function FooterComponent() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__community">
          <Row className="footer__community-images">
            <Col
              span={6}
              xs={24}
              lg={6}
              className="community__image community__image-hidden"
            >
              <img src={"/images/left-community.jpg"} />
            </Col>
            <Col span={12} xs={24} lg={12} className="community__image">
              <img src={"/images/community.png"} />
            </Col>
            <Col
              span={6}
              xs={24}
              lg={6}
              className="community__image community__image-hidden"
            >
              <img src={"/images/right-community.jpg"} />
            </Col>

            <div className="footer__community-content">
              <h3>BE PART OF LAGOM</h3>
              <p>Who says you can't choose your family?</p>
              <div className="footer__community-social">
                <a>
                  <span style={{ height: "21px", display: "inline-flex" }}>
                    <img
                      className="svg-icon"
                      src="https://curnonwatch.com/facebook-nCw.svg"
                    />
                  </span>
                </a>
                <a>
                  <span style={{ height: "21px", display: "inline-flex" }}>
                    <img
                      className="svg-icon"
                      src="https://curnonwatch.com/instagram-juW.svg"
                    />
                  </span>
                </a>
                <a>
                  <span style={{ height: "21px", display: "inline-flex" }}>
                    <img
                      className="svg-icon"
                      src="https://curnonwatch.com/youtube-nDR.svg"
                    />
                  </span>
                </a>
              </div>
              <p className="hashtag">#LAGOMSTORE</p>
            </div>
          </Row>
        </div>
        <div className="footer__warranty">
          <div className="container">
            <div className="footer__warranty-item">
              <SafetyOutlined /> 10 YEARS WARRANTY MANUFACTURER
            </div>
            <div className="footer__warranty-item">
              <CarOutlined /> FREESHIP WITH ORDER FROM $100
            </div>
            <div className="footer__warranty-item">
              <LikeOutlined />2 YEARS REFUND WARRANTY
            </div>
          </div>
        </div>
        <Row className="footer__credits container">
          <Col className="footer__credits-address" span={9} xs={24} lg={9}>
            <h3>US STORES</h3>
            <p>
              <span>STORE 1: </span>8228 S 1100th W, Losantville, IN, 47354
            </p>
            <p>
              <span>STORE 2: </span>413 E State Rd #35, Kamas, UT, 84036
            </p>
          </Col>
          <Col className="footer__credits-address" span={9} xs={24} lg={9}>
            <h3>CA STORES</h3>
            <p>
              <span>STORE: </span>50 Claude-Faille Rue, J5R 6J3
            </p>
          </Col>
          <Col className="footer__credits-copyright" span={6} xs={24} lg={6}>
            <h3>
              <img src="/images/lagomLogo.png" width="100" alt="logo" />
            </h3>
            <span>© 1997 - 2021 All Rights Reserved.</span>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default FooterComponent;
