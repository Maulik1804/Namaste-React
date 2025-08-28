const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "title",
    style: {
      color: "white",
      backgroundColor: "black",
    },
  },
  "Heading 1!"
);
const heading2 = React.createElement(
  "h2",
  {
    //props
    id: "domain",
    className: "domain",
  },
  "Heading 2!"
);
const container = React.createElement(
  "div",
  {
    id: "container", //props
  },
  [heading, heading2] //when we have to pass multiple children than we pass it like array
);
const root = ReactDOM.createRoot(document.getElementById("root")); //only one root in program(most of the time)
root.render(container); //render takes react element and put it into DOM.(takes only one argument)
