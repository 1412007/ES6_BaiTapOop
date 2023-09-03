class Person {
  userID;
  userName;
  userAddress;
  userEmail;
  userType;
  constructor(id, name, email, address, type) {
    this.userID = id;
    this.userName = name;
    this.userAddress = address;
    this.userEmail = email;
    this.userType = type;
  }
}

export default Person;
