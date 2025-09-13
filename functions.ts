function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet(42)

// function add(x, y) {
//   return x + y;
// }

// add(5)

// function getFavoriteNumber(): number {
//   return 7;
// }

async function getFavoriteNumber(): Promise<number> {
  return 7;
}

let names = ["ali", "mohammad", "hassan"];

names.forEach((item) => item.toUpperCase());
