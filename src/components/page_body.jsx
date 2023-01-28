import React from "react";

// stateless footer
const PageBody = ({ children }) => {
  return (
    <div 
    style={{
      margin: 20,
    }}>
       {children}
    </div>
  );
};

export default PageBody;
