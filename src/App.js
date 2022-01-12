import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useSSNFields, {
  input1,
  input2,
  input3,
  input4,
} from "./hooks/use-ssnfields";

const App = () => {
  const [cardNumbers, setCardNumbers] = useState([]);
  const { handleChange, handlePaste, removeNumber } = useSSNFields();
  const submitHandler = () => {
    var regExp = /[a-zA-Z]/g;
    if (
      !regExp.test(input1) &&
      !regExp.test(input2) &&
      !regExp.test(input3) &&
      !regExp.test(input4)
    ) {
      if (
        input1?.length + input2?.length + input3?.length + input4?.length ==
        16
      ) {
        let cardNumber = `${input1}-${input2}-${input3}-${input4}`;
        if (cardNumber.length > 18) {
          setCardNumbers((prev) => [...prev, cardNumber]);
          removeNumber();
        }
      }
    }
  };

  const removeCard = (index) => {
    setCardNumbers((prev) => {
      let p = [...prev];
      p.splice(index, 1);
      return p;
    });
  };

  return (
    <>
      <div className="creaditCardField">
        <h3 className="label">Card Number*</h3>
        <div></div>
        <div className="creaditCardField-inputContainer">
          <input
            type="text"
            name="ssn-1"
            maxLength={4}
            onChange={handleChange}
            onPaste={(e) => handlePaste(e.clipboardData.getData("Text"))}
            autoFocus
          />
          <input
            type="text"
            name="ssn-2"
            maxLength={4}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ssn-3"
            maxLength={4}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ssn-4"
            maxLength={4}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="button-container">
        <button type="submit" onClick={submitHandler}>
          ADD
        </button>
      </div>
    <div className="card-container">
      <ul>
        {cardNumbers.map((e, i) => (
          <li key={i}>
            <span>{e}</span>{" "}
            <button className="delete" onClick={() => removeCard(i)}>
              delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};
export default App;
