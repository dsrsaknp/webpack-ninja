import '@babel/polyfill';   // for transpiling async await code to js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
