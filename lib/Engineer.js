class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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

  getGithub() {
    let github = this.github;
    return github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = { Engineer };
