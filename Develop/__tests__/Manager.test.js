const { Manager } = require("../lib/Manager");
const { expect, test } = require("@jest/globals");
const name = "_name";
const id = 1102;
const email = "email@gmail.com";
const office_number = 1230;

const e1 = new Manager(name, id, email, office_number);
test("test for manager class---", () => {
  expect(e1.getEmail()).toMatch(email);
  expect(e1.getId()).toBe(id);
  expect(e1.getName()).toMatch(name);
  expect(e1.getRole()).toMatch("Manager");
  expect(e1.getOfficeNumber()).toBe(office_number);
});