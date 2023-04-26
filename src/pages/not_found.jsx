import React from "react";
import { useParams } from "react-router-dom";
import PageBody from "../layouts/page_body";

const NotFoundPage = () => {
  let params = useParams();

  return (
    <PageBody title="404 Not Found">
      <div>
        Oh hey there, where do you think you are going, that page does not exist
      </div>
    </PageBody>
  );
};

export default NotFoundPage;
