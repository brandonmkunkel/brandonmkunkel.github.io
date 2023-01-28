import React from "react";

// stateless footer
const FooterComponent = () => {
  return (
    <React.Fragment>
      <footer style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
      Copyright © 2023: &nbsp;
        <a href='https://brandonmkunkel.github.io/'>
          Brandon Kunkel
        </a>
      </footer>
    </React.Fragment>
  );
};

export default FooterComponent;
