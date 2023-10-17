let fullName = function (city, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + city + ", " + state
  );
};

let name = {
  firstName: "John",
  lastName: "Smith",
};

fullName.call(name, "Mlamla", "Blabla");
fullName.apply(name, ["Mlamla", "Blabla"]);

const add = (...numbers) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(1, 2, 5, 7, 9, 4);
