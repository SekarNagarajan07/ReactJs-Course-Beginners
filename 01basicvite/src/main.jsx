import React from "react";
import { createRoot } from "react-dom";

const reactElement = React.createElement(
  'a',
  { href: "http://google.com", target: '_blank' },
  "click me to go to Google"
);

createRoot(document.getElementById("root")).render(reactElement);
