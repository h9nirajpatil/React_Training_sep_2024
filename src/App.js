import User from "./User";
import Firstcomponent from "./Firstcomponent";
import PPage from "./PPage";
import UpdateP from "./UpadateP";
import Count from "./Count";
import Conditional from "./Conditional";
import Handlingevent from "./Handlingevent";
import React, { useReducer } from "react";

// High order component
// HOC that logs the props passed to a component
function withLogging(WrappedComponent) {
  return function (props) {
    console.log("Props:", props);
    return <WrappedComponent {...props} />;
  };
}

// Regular component
function HelloComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using the HOC
const HelloWithLogging = withLogging(HelloComponent);

// --------------------------------------------------------------------------

// Component that provides mouse position using render props
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/* Calling the render function passed as a prop */}
        {this.props.render(this.state)}
      </div>
    );
  }
}
// -----------------------------------------------------------------------------------------------------

// Modal component that renders its children
function Modal({ title, children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
//--------------------------------------------------------

// Reducer function to handle state transitions
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   let data = "John";
  //   function apple() {
  //     data = "karan";
  //     alert(data);
  //   }
  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
      {/* <button onClick={apple}>Click ME!</button> */}
      <HelloWithLogging name="Niraj" />;
      <MouseTracker
        render={(mouse) => (
          <h1>
            Mouse position: {mouse.x}, {mouse.y}
          </h1>
        )}
      />
      <Modal title="Welcome">
        <p>This is the content inside the modal.</p>
        <button>Close</button>
      </Modal>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <User />
      <Firstcomponent />
      <PPage />
      <UpdateP />
      <Count />
      <Conditional />
      <Handlingevent />
    </div>
  );
}

export default App;
