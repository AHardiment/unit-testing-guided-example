function sum(a, b) {
  if (a && b > 0) {
    return a + b;
  } else if (a || b === 0) {
    return a || b + 0;
  } else {
    return 0;
  }
}

function subtract(a, b) {
  if (a && b > 0) {
    return a - b;
  } else if (a || b === 0) {
    return a || b - 0;
  } else {
    return 0;
  }
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('You can\'t divide by 0');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
