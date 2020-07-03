import { Triangle } from "../src/project.js";

// *** Testing that worked!!!!

describe("Triangle", () => {

  test("should correctly create a triangle object with three lengths", () => {
    const triangle = new Triangle(2, 4, 5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test("should correctly determine if three sides do not make a triangle", () => {
    const notTriangle = new Triangle(3, 9, 22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test("should correctly determine if three sides make a scalene triangle", () => {
    const scaleneTriangle = new Triangle(4, 5, 7);
    expect(scaleneTriangle.checkType()).toEqual("scalene triangle");
  });

  test("should correctly determine whether three lengths make an iso triangle", () => {
    const isocTriangle = new Triangle(5, 5, 7);
    expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  });

  test("should determine if three lengths make an equilateral triangle", () => {
    const equilateralTriangle = new Triangle(4, 4, 4);
    expect(equilateralTriangle.checkType()).toEqual("equilateral triangle");
  });
});

// *** new testing with resuable code 3

// describe("Triangle", () => {
//   let reusableTriangle;

//   beforeEach(() => {
//     reusableTriangle = new Triangle(5, 5, 5);
//   });

//   test("should correctly determine if three sides make up an equilateral triangle", () => {
//     expect(reusableTriangle.checkType()).toEqual("equilateral triangle");
//   });

//   test("should correctly determine if three sides make up a scalene triangle", () => {
//     expect(reusableTriangle.checkType()).toEqual("scalene triangle");
//   });
// });


// *** new testing with resuable code

// describe("Triangle", () => {
//   let reusableTriangle;

//   beforeEach(() => {
//     reusableTriangle = new Triangle(5,5,5);
//   });

//   test ('should show how beforeEach', () => {
//     console.log(reusableTriangle);

//   });
// });

// *** new testing with resuable code


