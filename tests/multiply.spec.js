const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply two floating point numbers correctly", () => {
    const result = multiply(4.5, 2.5);
    expect(result).toBe(11.25);
  })
})
