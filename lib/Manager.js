class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
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

  getOfficeNumber() {
    let officeNumber = this.officeNumber;
    return officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = { Manager };
