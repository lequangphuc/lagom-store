import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Header.propTypes = {

};

function Header(props) {
  return (
    <div className="header">
      Hello World
      <p className="header__notification">
        Good Morning, Phuclq
      </p>
    </div>
  );
}

export default Header;