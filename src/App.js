import logo from "./logo.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [sucess, setSucess] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="App">
      <h1>ProgressBar</h1>
      <ProgressBar value={value} setSucess={setSucess} sucess={sucess} />
      {sucess ? "Completed !" : "loading..."}
    </div>
  );
}

export default App;
