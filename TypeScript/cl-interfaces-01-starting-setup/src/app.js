function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergedObje = merge({ name: "Olo", hobbies: ["Sport"] }, { age: 32 });
console.log(mergedObje.name); // coś nie halo
function createCourseGoal(title, description) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    return courseGoal;
}
var names = ["olo", "pola"];
