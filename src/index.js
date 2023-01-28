import React from "react";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<React.StrictMode>
  <App tab="home" />
</React.StrictMode>
);

console.log('public url: ', process.env.PUBLIC_URL)
