import React from "react";
import ReactDOM from "react-dom/client";

//using jsx-HTML or XML like syntax
//react element
const Title = () => <h1 id="heading">Namaste react using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//react functional component
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Namaste React fucntional component</h1>
  </div>
);
//or
// const HeadingComponent1 = () => <h1>Namaste react functional component</h1>;
root.render(<HeadingComponent />);
