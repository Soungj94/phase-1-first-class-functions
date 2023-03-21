function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm a return anonymous function");
  };
}
/////////////

// Define a sample callback function
function sampleCallback() {
  console.log("Callback function called.");
}

// Call the receivesAFunction with the sample callback function
receivesAFunction(sampleCallback);

// Get the named function and call it
const namedFunction = returnsANamedFunction();
namedFunction();

// Get the anonymous function and call it
const anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction();

// Callback function called.
// I'm a named function.
// I'm an anonymous function.
