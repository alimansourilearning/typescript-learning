let myName: string = "ali";
// let myName = "ali";

let firstname: string = "ali";

let age: number = 25;
let pi: number = 3.14;

let isStudent: boolean = true;

let names: string[] = ["ali", "mohammad", "hassan"];

let scores: Array<number> = [100, 200, 300];

let data: any = "hello";
data = 10;
data = true;

let value: unknown = "thanks";
value = 5;
value = null;

function f1(a: any) {
  return a.b;
}

// function f2(a: unknown) {
//   return a.b;
// }

function f2(a: unknown) {
  if (typeof a === "object" && a !== null && "b" in a) {
    return a.b;
  }
}

let someUnknown: unknown = "hello";
// let someString: string = someUnknown;

let someAny: any = "thanks";
let someNumber: number = someAny;

// let myLastname: string = 123456;

// let myPhoneNumber: string = 123456;

// let myUserId: string = 123456