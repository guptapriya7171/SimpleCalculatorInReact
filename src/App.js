import "./styles.css";
import { useState } from "react";

export default function App() {
  const [FirstNumber, setFirstNumber] = useState(0);
  const [SecondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  let doCalculation = (type) => {
    switch (type) {
      case "ADD":
        setResult(Number(FirstNumber) + Number(SecondNumber));
        break;
      case "SUB":
        setResult(Number(FirstNumber) - Number(SecondNumber));
        break;
      case "MUL":
        setResult(Number(FirstNumber) * Number(SecondNumber));
        break;
      case "DIV":
        setResult(Number(FirstNumber) / Number(SecondNumber));
        break;
      default:
        throw new Error("Use valid Number");
    }
  };
  return (
    <div className="App">
     <h3>Calculator App</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type={"number"}
          placeholder={"Enter the first number"}
          onChange={(e) => {
            setFirstNumber(e.target.value);
          }}
          value={FirstNumber}
        />
           <br/>
        <input
          type={"number"}
          placeholder={"Enter the second number"}
          onChange={(e) => {
            setSecondNumber(e.target.value);
          }}
          value={SecondNumber}
        />
        <br/>
        <button onClick={() => doCalculation("ADD")}>Add</button>
        <button onClick={() => doCalculation("SUB")}>Substract</button>
        <button onClick={() => doCalculation("MUL")}>Multiply</button>
        <button onClick={() => doCalculation("DIV")}>Division</button>
        <h4>Result is:{result}</h4>
      </form>
    </div>
  );
}
//React Component
//1. React components are like functions. They don't have to be functions.
//2. They can take arguments and return a piece of UI and logic when called
//3. State is a variable that can cause your component
