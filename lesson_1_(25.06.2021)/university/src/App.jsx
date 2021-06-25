import "./App.css";
import Test from "./components/Test/Test";
import TestModule from "./components/TestModule/TestModule";
function App() {
  return (
    <div className="App">
      <Test text="Hello"></Test>
      <TestModule />
    </div>
  );
}

export default App;
