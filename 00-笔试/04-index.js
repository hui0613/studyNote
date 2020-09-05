function dupicatedWord(arr) {
  let stack = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (stack[item]) {
      stack[item]++;
    } else {
      stack[item] = 1;
    }
  }
  for (let key in stack) {
    if (stack[key] >= 2) {
      stack[key] = true;
    } else {
      stack[key] = false;
    }
  }
  return stack;
}

let arr = ["a", "b", "a", "b", "c"];
console.log(dupicatedWord(arr));

// let test = new Boolean(0);
// console.log(test);

function test(a) {
  a = a + 10;
}
var a = 10;
test(a);
console.log(a);

console.log({} + "b" > {} + "a");
