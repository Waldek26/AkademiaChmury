type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
  }

  return result;
}

const combinedAges = combine(30, 27, "as-number");
console.log(combinedAges);

const combineStringsdAges = combine(30, 27, "as-number");
console.log(combineStringsdAges);

const combineNames = combine("Olo", "Bala", "as-text");
console.log(combineNames);
