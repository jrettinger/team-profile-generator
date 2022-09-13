const { Engineer } = require("../lib/Engineer");
const { expect, test } = require("@jest/globals");
const name = "_name";
const id = 1102;
const email = "email@gmail.com";
const github = "githup.com";

const e1 = new Engineer(name, id, email, github);
test("test for engineer class---", () => {
  expect(e1.getEmail()).toMatch(email);
  expect(e1.getId()).toBe(id);
  expect(e1.getName()).toMatch(name);
  expect(e1.getRole()).toMatch("Engineer");
  expect(e1.getGithub()).toMatch(github);
});