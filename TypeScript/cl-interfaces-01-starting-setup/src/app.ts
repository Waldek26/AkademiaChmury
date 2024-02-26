// function merge<T extends object, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObje = merge({ name: "Olo", hobbies: ["Sport"] }, { age: 32 });
// console.log(mergedObje.name); // coś nie halo

// interface CourseGoal {
//   title: string;
//   description: string;
// }

// function createCourseGoal(title: string, description: string): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   return courseGoal as CourseGoal;
// }

// const names: Readonly<string[]> = ["olo", "pola"];


class A { 
  prop1: string = "";
  prop2: number = 0;
} 

class B { 

  prop1: string;
  prop2: number;
  prop3: A | null;

  constructor() {
    this.prop1="";
    this.prop2=-1;
    this.prop3 = null;
  }

} 

var a = new A();
for (var i in a) {
   if (a.hasOwnProperty(i)) {
      console.log(a[i]);
   }
}