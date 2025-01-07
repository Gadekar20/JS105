var age=10;
let displayAge=()=>{
  return `current age is:${age}`;
}
let changeAge=()=>{
  age=30;
  return `updated age:${age}`;
}
console.log(displayAge());
console.log(changeAge());
console.log(displayAge())