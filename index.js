const rootElemment = document.getElementById("root");
// --- 1 Pure js method to generate an element ---
// const element = document.createElement("div");
// element.textContent = "Hello World";
// element.className = "container";
// rootElemment.appendChild(element);

// --- 2 React method to generate an element ---
const element = React.createElement("div", {
  className: "container",
  children: ["Hello World ", "Goodbye World"]
});
ReactDOM.render(element, rootElemment);
