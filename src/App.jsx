import "./App.css";
import { RecoilRoot } from "recoil";
import { Books } from "./Books";
import { SavedBooks } from "./SavedBooks";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <SavedBooks />
        <Books />
      </div>
    </RecoilRoot>
  );
}

export default App;
