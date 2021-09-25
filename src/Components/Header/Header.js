import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
      <div>
        <section className="bg-dark py-3">
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
        </section>
      </div>
    );
};

export default Header;