import User from "./User";
import Firstcomponent from "./Firstcomponent";
import PPage from "./PPage";
import UpdateP from "./UpadateP";

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
    </div>
  );
}

export default App;
