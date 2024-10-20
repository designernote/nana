import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import Publish from "./Publish.tsx";
import "./index.css";
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Publish />
  </React.StrictMode>
);
