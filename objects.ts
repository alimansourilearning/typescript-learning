function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x is", pt.x);
  console.log("the coordinate's y is", pt.y);
}

// printCoord({ x: 4, y: 5, z: 7 });

function printName(name: { firstname: string; lastname?: string }) {
  console.log(name.lastname?.toUpperCase());
}

printName({ firstname: "ali" });
printName({ firstname: "ahmad", lastname: "ahmadi" });
