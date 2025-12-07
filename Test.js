class BaseUrl {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
}

class Account extends BaseUrl {
  constructor(baseUrl, name, password) {
    (super(baseUrl), (this.name = name), (this.password = password));
  }
}

const account = new Account("uel", "Artur", "password1");
console.log(account);
const a = [1, 2];
a[1] = 3;
console.log(a)