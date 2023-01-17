import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <div>
        Oh hey there, where do you think you are going
      </div>
      <Link to='/'>Home</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default NotFoundPage;
