import React, { useEffect } from "react";

export let input1, input2, input3, input4;
const useSSNFields = () => {
  let previousSibling = null;
  const [ssnValues, setValue] = React.useState({
    ssn1: "",
    ssn2: "",
    ssn3: "",
    ssn4: "",
  });
  function logKey(e) {
    if (e.key && previousSibling.value.length >= 4) {
      console.log("keypressed");
      const [fieldName, fieldIndex] = previousSibling.name.split("-");
      if (parseInt(fieldIndex, 10) < 4) {
        // Get the next input field
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        );

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
          nextSibling.value = e.key.toString();
          setValue({
            [`ssn${fieldIndex}`]: e.key.toString(),
          });
        }
      }
    }
  }
  return {
    removeNumber: () => {
      input1 = '';
      document.querySelector(`input[name=ssn-1]`).value = input1;
      input2='';
      document.querySelector(`input[name=ssn-2]`).value = input2;
      input3 = '';
      document.querySelector(`input[name=ssn-3]`).value = input3;
      input4 = '';
      document.querySelector(`input[name=ssn-4]`).value = input4;
    },
    handlePaste: (value) => {
      input1 = value.substring(0, 4);
      input4 = document.querySelector(`input[name=ssn-2]`).value =
        value.substring(4, 8);
      input2 = value.substring(4, 8);
      input4 = document.querySelector(`input[name=ssn-3]`).value =
        value.substring(8, 12);
      input3 = value.substring(8, 12);
      input4 = document.querySelector(`input[name=ssn-4]`).value =
        value.substring(12, 16);
      input4 = value.substring(12, 16);
    },
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");
      if (value === "") {
        document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10)}]`
        ).value = value;
        console.log(fieldIndex);
        if (fieldIndex == 1) {
          input1 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 2) {
          input2 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 3) {
          input3 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 4) {
          input4 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        previousSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) - 1}]`
        );
        if (previousSibling !== null) {
          previousSibling.focus();

          previousSibling.onkeypress = logKey;
        }
      }
      if (value.length >= maxLength) {
        document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10)}]`
        ).value = value;
        console.log(fieldIndex);
        if (fieldIndex == 1) {
          input1 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 2) {
          input2 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 3) {
          input3 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 4) {
          input4 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        console.log(input1, input2, input3, input4);
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 4) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
          );

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      } else {
        document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10)}]`
        ).value = value;
        console.log(fieldIndex);
        if (fieldIndex == 1) {
          input1 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 2) {
          input2 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 3) {
          input3 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
        if (fieldIndex == 4) {
          input4 = document.querySelector(
            `input[name=ssn-${parseInt(fieldIndex, 10)}]`
          ).value;
        }
      }

      setValue({
        ...value,
        [`ssn${fieldIndex}`]: value,
      });
    },
  };
};
export default useSSNFields;
