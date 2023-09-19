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
