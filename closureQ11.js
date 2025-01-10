function outerFunction(){
  var message="hello I am outer function";
  function innerFunction(){
    console.log(message);
  }
  return innerFunction;
}
var storedMsg=outerFunction();
storedMsg();