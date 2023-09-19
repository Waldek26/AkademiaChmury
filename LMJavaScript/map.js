const myMap = new Map();

const key1 = "mystr",
  key2 = {},
  key3 = function () {};

myMap.set(key1, "this is a string");
myMap.set(key2, "this is blank object");
myMap.set(key3, "this is empty function");

console.log(myMap);

for (let [key, value] of myMap) {
  console.log(key, value);
}

for (let key of myMap.keys) {
  console.log(key);
}

for (let value of myMap.values) {
  console.log(value);
}

myMap.forEach((value, key) => {
  console.log("key is ", key);
  console.log("value is ", value);
});

let myArray = Array.from(myMap);
console.log("Map to Array is ", myArray);
