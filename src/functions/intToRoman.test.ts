// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import intToRoman from "./intToRoman";

expect.extend(matchers);


test("Success - intToRoman", () => {
  expect(intToRoman(14)).toBe("XIV");
});
test("Success - intToRoman over 1000", () => {
  expect(intToRoman(3006)).toBe("MMMVI");
});
test("Fail - intToRoman 0", () => {
  expect(() => intToRoman(0)).fail;
});

test("Fail - intToRoman negative number", () => {
  expect(() => intToRoman(-1)).fail;
});
test("Fail - intToRoman negative number", () => {
  expect(() => intToRoman(1.5)).fail;
});
test("Fail - intToRoman negative number", () => {
  expect(() => intToRoman(4000)).fail;
});
