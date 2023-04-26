import React from "react";
import { Box, Container } from "@mui/material";

const PageBody = ({ children, title }) => {
  return (
    <Box
      sx={{
        m: { xs: 1, sm: 1 },
        pt: { xs: 1, sm: 1 },
      }}
    >
      <h1>{title}</h1>
      {children}
    </Box>
  );
};

export default PageBody;
