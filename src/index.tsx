import React from "react";
import ReactDOM from "react-dom";
import BlogApp from "./components/BlogApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <BlogApp />
  </React.StrictMode>,
  document.getElementById("root")
);
