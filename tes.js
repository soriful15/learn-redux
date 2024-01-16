// const arr = ["x", "y", "z", "a"];
// console.log(arr);

// const arr2 = arr.filter((item) => item !== "x");
// console.log(arr2);

// function crying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// console.log(add(5)(2)(2))
const level = add(5);

console.log(level(2)(2));
console.log(level(1)(3));
