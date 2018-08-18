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
function Box(props) {
  return <div {...props} />;
}
const element = (
  <div>
    <Box
      style={{
        paddingLeft: 20,
        border: '1px solid #000'
      }}
    >
      Small Box
    </Box>
  </div>
);
ReactDOM.render(element, rootElemment);
