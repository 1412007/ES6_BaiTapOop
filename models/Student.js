import Person from "./Person.js";
class Student extends Person {
  mathScore;
  physicScore;
  chemistryScore;
  constructor(
    id,
    name,
    email,
    address,
    type,
    mathScore,
    physicScore,
    chemistryScore
  ) {
    super(id, name, email, address, type);
    this.mathScore = mathScore;
    this.physicScore = physicScore;
    this.chemistryScore = chemistryScore;
  }

  calAverage = () => {
    return (this.mathScore + this.physicScore + this.chemistryScore) / 3;
  };
}

export default Student;
