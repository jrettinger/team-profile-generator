class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getName() {
    let name = this.name;
    return name;
  }

  getId() {
    let id = this.id;
    return id;
  }

  getEmail() {
    let email = this.email;
    return email;
  }

  getSchool() {
    let school = this.school;
    return school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = { Intern };
