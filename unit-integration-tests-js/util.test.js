//import util.js
const { generateText, checkAndGenerate } = require("./util");

//unit tests
//will be failed
test("should output name and age case 1", () => {
  const text = generateText("Mia", 25);
  expect(text).toBe("Mia (24 years old)");
});

test("should output name and age case 2", () => {
  const text = generateText("Mia", 25);
  expect(text).toBe("Mia (25 years old)");
});

//will be failed
test("should output data-less text case 1", () => {
  const text = generateText();
  expect(text).toBe("undefined (null year old)");
})

test("should output data-less text case 2", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

//integration test
test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});