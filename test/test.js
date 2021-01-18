const { expect } = require("chai");
const { addTwoNumbers, subtractNumbers } = require("../src")

it("Should return 11 as the sum of 6 and 5", () => {
  const sum = addTwoNumbers(6, 5);

  expect(sum).equal(11)
})

it("Should subtract 2 from 3 and retutn 4", () => {
  const difference = subtractNumbers(3, 2);

  expect(difference).equal(4)
})