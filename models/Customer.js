import Person from "./Person.js";
class Customer extends Person {
  companyName;
  bill;
  evaluate;
  constructor(id, name, email, address, type, companyName, bill, evaluate) {
    super(id, name, email, address, type);
    this.companyName = companyName;
    this.bill = bill;
    this.evaluate = evaluate;
  }
}

export default Customer;
