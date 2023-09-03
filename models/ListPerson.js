import Student from "./Student.js";
import Employee from "./Employee.js";
import Customer from "./Customer.js";
class ListPerson {
  arrPerson = [];

  addUser = (person) => {
    this.arrPerson.push(person);
    this.renderUser();
  };

  deleteUser = (id) => {
    let index = this.arrPerson.findIndex((item) => item.userID == id);
    if (index > -1) {
      this.arrPerson.splice(index, 1);
      this.renderUser();
    }
  };

  updateUser = (id, type, arr) => {
    let index = this.arrPerson.findIndex((item) => item.userID == id);
    if (index > -1) {
      if (type == "Hoc sinh") {
        let [
          userID,
          userName,
          userAddress,
          userEmail,
          userType,
          mathScore,
          physicScore,
          chemistryScore,
        ] = arr;
        const student = new Student(
          userID,
          userName,
          userAddress,
          userEmail,
          userType,
          mathScore,
          physicScore,
          chemistryScore
        );
        console.log(student);
        this.arrPerson[index] = student;
      } else if (type == "Nhan vien") {
        let [
          userID,
          userName,
          userAddress,
          userEmail,
          userType,
          workingDays,
          salary,
        ] = arr;
        const employee = new Employee(
          userID,
          userName,
          userAddress,
          userEmail,
          userType,
          workingDays,
          salary
        );
        this.arrPerson[index] = employee;
      } else if (type == "Khach hang") {
        let [
          userID,
          userName,
          userAddress,
          userEmail,
          userType,
          companyName,
          bill,
          evaluate,
        ] = arr;
        const customer = new Customer(
          userID,
          userName,
          userAddress,
          userEmail,
          userType,
          companyName,
          bill,
          evaluate
        );
        this.arrPerson[index] = customer;
      }
      this.renderUser();
    }
  };

  filterUser = (filterType) => {
    let arrTemp = this.arrPerson;
    let newArr = [];
    if (filterType == "all" || filterType == "Chọn loại") {
      this.arrPerson = arrTemp;
    } else {
      for (let i = 0; i < arrTemp.length; i++) {
        if (filterType == "student") {
          if (arrTemp[i].userType == "Hoc sinh") {
            newArr.push(arrTemp[i]);
          }
        } else if (filterType == "employee") {
          if (arrTemp[i].userType == "Nhan vien") {
            newArr.push(arrTemp[i]);
          }
        } else if (filterType == "customer") {
          if (arrTemp[i].userType == "Khach hang") {
            newArr.push(arrTemp[i]);
          }
        }
      }
      this.arrPerson = newArr;
    }
    this.renderUser();
    this.arrPerson = arrTemp;
  };

  renderUser = (arr = this.arrPerson) => {
    let content = "";
    for (let i = 0; i < arr.length; i++) {
      let { userID, userName, userAddress, userEmail, userType } = arr[i];
      content += `
        <tr>
            <td>${userID}</td>
            <td>${userName}</td>
            <td>${userEmail}</td>
            <td>${userAddress}</td>
            <td>${userType}</td>
            <td><button class="btn btn-danger" style="margin-right: 3px" onclick="deleteUser('${userID}')">Xóa</button><button class="btn btn-warning" data-bs-toggle="modal"
            data-bs-target="#exampleModal" onclick="fillForm('${userID}')">Sửa</button></td>
        </tr>`;
    }
    document.getElementById("tbodyUser").innerHTML = content;
  };
}

export default ListPerson;
