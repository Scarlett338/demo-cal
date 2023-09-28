import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState(0);

  const handleValue = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const handleAdd = () => {
    setResult(result + number);
  };
  const handleSubtract = () => {
    setResult(result - number);
  };
  const handleMultiply = () => {
    setResult(result * number);
  };
  const handleDivide = () => {
    setResult(result / number);
  };
  const handleResetInput = () => {
    setNumber(0);
  };
  const handleResetResult = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
        <div className="result">{result}</div>
        <div>
          <input
            type="text"
            onChange={handleValue}
            value={number}
            defaultValue={number}
          />
        </div>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleSubtract}>subtract</button>
        <button onClick={handleMultiply}>multiply</button>
        <button onClick={handleDivide}>divide</button>
        <br />
        <button className="reset" onClick={handleResetInput}>
          reset input
        </button>
        <button className="reset" onClick={handleResetResult}>
          reset result
        </button>
      </div>
    </div>
  );
}

export default App;
