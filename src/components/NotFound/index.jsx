import { Button, Result } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

NotFound.propTypes = {
  status: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

NotFound.defaultProps = {
  status: "404",
  title: "404",
  desc: "Sorry, the page you visited does not exist.",
};

function NotFound(props) {
  const { status, title, desc } = props;
  let history = useHistory();

  return (
    <Result
      status={status}
      title={title}
      subTitle={desc}
      extra={
        <Button className="not-found-button" onClick={() => history.push("/")}>
          Back Home
        </Button>
      }
    />
  );
}

export default NotFound;
