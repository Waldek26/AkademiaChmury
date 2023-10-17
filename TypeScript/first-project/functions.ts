function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
}

// let combineValues: Function;
// combineValues = add;
let combineValues: (a: number, b: number) => number;

combineValues = add;

//combineValues = printResult;

//combineValues = 9;

console.log(combineValues(8, 3));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// WTF?
// -----------------------------
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});
// -----------------------------
