import React from "react";
import logo from "../../assets/img/logo-sciensa-pb2.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = props => {
  const classes = props.darker ? "fixed-menu darker" : "fixed-menu";
  return (
    <div className={classes}>
      <div className="logo-content">
        <Link to='/'>
          <img src={logo} alt="sciensa" />
        </Link>
      </div>
      <div className="menu-content">
        <Link to='/filme/novo'>
          <button>Adicionar Filme</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
