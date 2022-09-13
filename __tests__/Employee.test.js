const { Employee } = require("../lib/Employee");
const { expect, test } = require("@jest/globals");
const name = "_name";
const id = 1102;
const email = "email@gmail.com";

const e1 = new Employee(name, id, email);
test("test for employee class---", () => {
  expect(e1.getEmail()).toMatch(email);
  expect(e1.getId()).toBe(id);
  expect(e1.getName()).toMatch(name);
  expect(e1.getRole()).toMatch("Employee");
});