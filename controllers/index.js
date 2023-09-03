import Student from "../models/Student.js";
import Employee from "../models/Employee.js";
import Customer from "../models/Customer.js";
import Person from "../models/Person.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();
let sltElement = document.getElementById("userType");
let idElement = document.getElementById("userID");
let nameElement = document.getElementById("userName");
let addressElement = document.getElementById("userAddress");
let emailElement = document.getElementById("userEmail");
let mathElement = document.getElementById("mathScore");
let physicElement = document.getElementById("physicScore");
let chemistryElement = document.getElementById("chemistryScore");
let workingElement = document.getElementById("workingDays");
let salaryElement = document.getElementById("salary");
let companyElement = document.getElementById("companyName");
let billElement = document.getElementById("bill");
let evaluateElement = document.getElementById("evaluate");

sltElement.onchange = () => {
  let selectedValue = sltElement.value;
  let inputFields = document.getElementsByClassName("inputField");
  for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].classList.add("d-none");
  }
  if (selectedValue == "student") {
    document.getElementById("divMath").classList.remove("d-none");
    document.getElementById("divPhysic").classList.remove("d-none");
    document.getElementById("divChemistry").classList.remove("d-none");
  } else if (selectedValue == "employee") {
    document.getElementById("divWorkingDay").classList.remove("d-none");
    document.getElementById("divSalary").classList.remove("d-none");
  } else if (selectedValue == "customer") {
    document.getElementById("divCompanyName").classList.remove("d-none");
    document.getElementById("divBill").classList.remove("d-none");
    document.getElementById("divEvaluate").classList.remove("d-none");
  }
};

document.getElementById("userForm").onsubmit = () => {
  event.preventDefault();
  // get input value
  let selectedValue = sltElement.value;
  let userID = idElement.value;
  let userName = nameElement.value;
  let userAddress = addressElement.value;
  let userEmail = emailElement.value;

  if (selectedValue == "student") {
    // get score
    let mathScore = mathElement.value * 1;
    let physicScore = physicElement.value * 1;
    let chemistryScore = chemistryElement.value * 1;
    // init student
    const student = new Student(
      userID,
      userName,
      userEmail,
      userAddress,
      "Hoc sinh",
      mathScore,
      physicScore,
      chemistryScore
    );
    listPerson.addUser(student);
  } else if (selectedValue == "employee") {
    let workingDays = workingElement.value * 1;
    let salary = salaryElement.value * 1;
    const employee = new Employee(
      userID,
      userName,
      userEmail,
      userAddress,
      "Nhan vien",
      workingDays,
      salary
    );
    listPerson.addUser(employee);
  } else if (selectedValue == "customer") {
    let companyName = companyElement.value;
    let bill = billElement.value * 1;
    let evaluate = evaluateElement.value;
    const customer = new Customer(
      userID,
      userName,
      userEmail,
      userAddress,
      "Khach hang",
      companyName,
      bill,
      evaluate
    );
    listPerson.addUser(customer);
  }
  document.getElementById("userForm").reset();
};

window.fillForm = function (id) {
  let index = listPerson.arrPerson.findIndex((item) => item.userID == id);
  if (index > -1) {
    idElement.value = listPerson.arrPerson[index].userID;
    nameElement.value = listPerson.arrPerson[index].userName;
    addressElement.value = listPerson.arrPerson[index].userAddress;
    emailElement.value = listPerson.arrPerson[index].userEmail;

    // hide specific fields (employee, student, and customer)
    let inputFields = document.getElementsByClassName("inputField");
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].classList.add("d-none");
    }
    idElement.disabled = true;
    sltElement.disabled = true;

    if (listPerson.arrPerson[index].userType == "Hoc sinh") {
      sltElement.selectedIndex = 1;
      // display student
      document.getElementById("divMath").classList.remove("d-none");
      document.getElementById("divPhysic").classList.remove("d-none");
      document.getElementById("divChemistry").classList.remove("d-none");
      // fill value
      mathElement.value = listPerson.arrPerson[index].mathScore;
      physicElement.value = listPerson.arrPerson[index].physicScore;
      chemistryElement.value = listPerson.arrPerson[index].chemistryScore;
    } else if (listPerson.arrPerson[index].userType == "Nhan vien") {
      sltElement.selectedIndex = 2;
      // display employee
      document.getElementById("divWorkingDay").classList.remove("d-none");
      document.getElementById("divSalary").classList.remove("d-none");
      // fill value
      workingElement.value = listPerson.arrPerson[index].workingDays;
      salaryElement.value = listPerson.arrPerson[index].salary;
    } else if (listPerson.arrPerson[index].userType == "Khach hang") {
      sltElement.selectedIndex = 2;
      // display customer
      document.getElementById("divCompanyName").classList.remove("d-none");
      document.getElementById("divBill").classList.remove("d-none");
      document.getElementById("divEvaluate").classList.remove("d-none");
      // fill value
      companyElement.value = listPerson.arrPerson[index].companyName;
      billElement.value = listPerson.arrPerson[index].bill;
      evaluateElement.value = listPerson.arrPerson[index].evaluate;
    }
  }
};

window.deleteUser = function (id) {
  listPerson.deleteUser(id);
};

window.updateUser = function () {
  let id = idElement.value;
  let lstValue = [];
  let selectedValue = sltElement.value;

  // get value
  lstValue.push(id);
  lstValue.push(nameElement.value);
  lstValue.push(addressElement.value);
  lstValue.push(emailElement.value);
  if (selectedValue == "student") {
    lstValue.push("Hoc sinh");
    lstValue.push(mathElement.value * 1);
    lstValue.push(physicElement.value * 1);
    lstValue.push(chemistryElement.value * 1);
  } else if (selectedValue == "employee") {
    lstValue.push("Nhan vien");
    lstValue.push(workingElement.value * 1);
    lstValue.push(salaryElement.value * 1);
  } else if (selectedValue == "customer") {
    lstValue.push("Khach hang");
    lstValue.push(companyElement.value);
    lstValue.push(billElement.value * 1);
    lstValue.push(evaluateElement.value);
  }
  // update user
  listPerson.updateUser(id, lstValue[3], lstValue);
};

document.getElementById("selType").onchange = () => {
  let filterType = document.getElementById("selType").value;
  listPerson.filterUser(filterType);
};
