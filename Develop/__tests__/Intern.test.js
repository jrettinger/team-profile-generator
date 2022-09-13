const { Intern } = require("../lib/Intern");
const { expect, test } = require("@jest/globals");
const name = "_name";
const id = 1102;
const email = "email@gmail.com";
const school = "school";

const e1 = new Intern(name, id, email, school);
test("test for intern class---", () => {
  expect(e1.getEmail()).toMatch(email);
  expect(e1.getId()).toBe(id);
  expect(e1.getName()).toMatch(name);
  expect(e1.getRole()).toMatch("Intern");
  expect(e1.getSchool()).toMatch(school);
});