function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("Your id is: ", id.toUpperCase());
  } else {
    console.log("Your id is: ", id);
  }
}

printId(1234);
printId("1234");
printId("dfkldfsdkfdlf4545454545");
// printId({ myId: 454545 });

function getFirstThree(x: string | string[]) {
  return x.slice(0, 3);
}
