let state: "pending" = "pending";
// state = "done"
type UserRole = "admin" | "editor" | "viewer";

function checkPermissions(user: UserRole) {
  console.log("user role is: " + user);
}

checkPermissions("admin");
checkPermissions("viewer");
// checkPermissions("guest")

const myStatus = "success";
let firstname = "ali";

function handleFullname(firstname: "ali" | "mohammad", lastname: string) {
  return firstname + lastname;
}

const someoneName = { firstname: "ali" as const, lastname: "mansouri" };
handleFullname(someoneName.firstname, someoneName.lastname);

