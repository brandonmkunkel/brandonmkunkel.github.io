import React from "react";

// stateless footer
const FooterComponent = () => {
  return (
    <div>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright © 2023: &nbsp;
        <a className='text-reset fw-bold' href='https://brandonmkunkel.github.io/'>
          Brandon Kunkel
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
