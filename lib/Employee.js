class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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

  getRole() {
    return "Employee";
  }
}

module.exports = { Employee };