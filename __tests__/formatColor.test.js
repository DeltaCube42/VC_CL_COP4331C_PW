const formatColor = require('../js/utils/formatColor');

describe("formatColor()", () => {
  test("trims whitespace and lowercases input", () => {
    expect(formatColor("  RED ")).toBe("red");
  });

  test("handles empty strings", () => {
    expect(formatColor("   ")).toBe("");
  });

  test("handles mixed-case input", () => {
    expect(formatColor("bLuE")).toBe("blue");
  });
});
