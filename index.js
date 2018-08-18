const rootElemment = document.getElementById("root");
// // --- 1 Pure js method to generate an element ---
// const element = document.createElement("div");
// element.textContent = "Hello World";
// element.className = "container";
// rootElemment.appendChild(element);

// // --- 2 React createElement call to generate an element ---
// const element = React.createElement("div", {
//   className: "container",
//   children: ["Hello World ", "Goodbye World"]
// });

// // --- 3 React JSX syntax to create an element(Use babel as transformer) ---
const content = "Hello World";
const myClassName = 'container'
const props = {
  className: myClassName,
  children: content
}
const element = <div {...props}/>;
ReactDOM.render(element, rootElemment);
