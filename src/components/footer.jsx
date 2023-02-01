import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

// stateless footer
const FooterComponent = () => {
  return (
    <footer className="footer">
    Copyright © 2023: &nbsp;
      <Link to='/'>Brandon Kunkel</Link>
    </footer>
  );
};

export default FooterComponent;
