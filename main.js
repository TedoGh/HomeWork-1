const a = 147;
const b = 3;

const fahrenheitTemp = 87;
const fahrenheitToCelsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;

function compareValue(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

const resultCompareValue = compareValue(a, b);
console.log(resultCompareValue);

function fahrenheitToCelsius(fahrenheitTemp) {
  if (typeof fahrenheitTemp === "number") {
    return fahrenheitTemp + "F = " + fahrenheitToCelsiusTemp + "C.";
  } else {
    return "false";
  }
}

const resultfahrenheitToCelsius = fahrenheitToCelsius(fahrenheitTemp);
console.log(resultfahrenheitToCelsius);

function operationFn(operation) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "false";
  } else {
    return operation;
  }
}

console.log(operationFn(a + b));
console.log(operationFn(a - b));
console.log(operationFn(a * b));
console.log(operationFn(a / b));
