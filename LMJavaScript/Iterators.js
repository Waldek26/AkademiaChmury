function ItForeach() {
  var numbers = [15, 25, 30, 40];
  numbers.forEach(function (value, index) {
    console.log(value, index);
  });
}

function ItMap() {
  var number = [1, 2, 3];
  var multi = number.map(function (item) {
    return item * 2;
  });
  console.log(multi);
}

function ItFilter() {
  var number = [1, 2, 3];
  var even = number.filter(function (item) {
    return item % 2 == 0;
  });
  console.log(even);
}

function ItReduce() {
  var number = [1, 2, 3];
  var add = number.reduce(function (result, item) {
    return result + item;
  });
  console.log(add);
}

function ItSome() {
  var negativeNum = [1, 2, 3, -1, 4];
  var result = negativeNum.some(function (item) {
    return item < 0;
  });
  console.log(result);
}

function ItEvery() {
  var numbers = [1, 2, 3, 5, 4];
  var result = numbers.every(function (item) {
    return item > 0;
  });
  console.log(result);
}

function ItFind() {
  var objects = [{ id: "a" }, { id: "b" }, { id: "c" }];

  var found = objects.find(function (item) {
    return item.id === "b";
  });

  console.log(found);
}
