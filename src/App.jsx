import "./App.css";
import { RecoilRoot } from "recoil";
import { Books } from "./Books";
import { SavedBooks } from "./SavedBooks";

function App() {
  return (
    <RecoilRoot>
      <center>
        <div className="App">
          <h1>Using Recoil for state management</h1>
          <SavedBooks />
          <Books />
        </div>
      </center>
    </RecoilRoot>
  );
}

export default App;
