// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import romanToInt from "./romanToInt";

expect.extend(matchers);
const errorString = "Must be a roman number or inferior to 3999";

test("Success - romanToInt", () => {
  expect(romanToInt("XIV")).toBe(14);
});
test("Success - romanToInt over 1000", () => {
  expect(romanToInt("MMMVI")).toBe(3006);
});

test("Fail - intToRoman 0", () => {
  expect(() => romanToInt("PO")).toThrowError(errorString);
});
