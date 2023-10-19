function merge<T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObje = merge({ name: "Olo", hobbies: ["Sport"] }, { age: 32 });
console.log(mergedObje.name); // coś nie halo

interface CourseGoal {
  title: string;
  description: string;
}

function createCourseGoal(title: string, description: string): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["olo", "pola"];
