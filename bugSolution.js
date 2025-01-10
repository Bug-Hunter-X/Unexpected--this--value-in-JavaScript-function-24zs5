function myFunc() {
  const self = this; // Store the value of 'this'
  console.log(self);
}

myFunc();

// Or using arrow functions:
const myArrowFunc = () => {
  console.log(this); // this will inherit the correct value
};

myArrowFunc();

// Or using bind method:
const myBoundFunc = myFunc.bind({someProperty: 'someValue'});
myBoundFunc();