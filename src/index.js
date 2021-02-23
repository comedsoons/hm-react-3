import React from "react";
import ReactDOM from "react-dom";

const olegImg = React.createElement(
    "img",
    {
        src: "https://images.unsplash.com/photo-1611802730713-94dce40f9070?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        alt: "oleg-image"
    },
)
const h1big = React.createElement(
    "h1",
    {},
    "Lorem ipsum dolor, sit amet.",
)
const divbig = React.createElement(
    "div",
    {
        children: [olegImg, h1big],
    },
);
ReactDOM.render(divbig, document.getElementById("root"));