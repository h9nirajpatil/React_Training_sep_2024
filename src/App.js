import User from "./User";
import Firstcomponent from "./Firstcomponent";
import PPage from "./PPage";
import UpdateP from "./UpadateP";
import Count from "./Count";
import Conditional from "./Conditional";
import Handlingevent from "./Handlingevent";

function App() {
  //   let data = "John";
  //   function apple() {
  //     data = "karan";
  //     alert(data);
  //   }
  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
      {/* <button onClick={apple}>Click ME!</button> */}
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
