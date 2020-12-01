let char = ['\r|   ', '\r/   ', '\r-  ', '\r\\  ', '\r|  ', '\n'];
let delay = 0

let spinnerFunction = function(array) {
  for (let symbol of array) {
    setTimeout(() => {
      process.stdout.write(symbol);
    }, delay);
    delay += 200;
  }
};


spinnerFunction(char);

