// type Point = { x: number; y: number };
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is: " + pt.x);
  console.log("The coordinate's y value is: " + pt.y);
}

type Id = string | number;
function printId(id: Id) {
  console.log("Your id is: " + id);
}

type UserName = string;
function showName(name: string): UserName {
  return name;
}

// type Animal = {
//   name: string;
// };

// type Bear = Animal & { honey: boolean };

interface Animal {
  name: string;
}
interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = { name: "Winnie", honey: true };

interface MyName {
  firstname: string;
}

interface MyName {
  lastname: string;
}

// type MyName = {
//   firstname: string;
// };

// type MyName = {
//   lastname: string;
// };

let myName: MyName = { firstname: "ali", lastname: "mansouri" };
