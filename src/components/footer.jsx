import React from "react";
import '../App.css';

// stateless footer
const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer className="footer">
      Copyright © 2023: &nbsp;
        <a href='https://brandonmkunkel.github.io/'>
          Brandon Kunkel
        </a>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;
