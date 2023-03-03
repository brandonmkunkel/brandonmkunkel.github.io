import React from "react";
import { Container } from "react-bootstrap";

const PageBody = ({ children }) => {
  return (
    <Container
      sx={{
        margin: { xs: 2, sm: 3, med: 3 },
      }}
    >
      {children}
    </Container>
  );
};

export default PageBody;
