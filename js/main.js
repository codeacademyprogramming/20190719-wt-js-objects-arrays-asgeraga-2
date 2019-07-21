`use strict`

function StuDent(first, last, email, phone , age) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.phone = phone;
    this.age = age;
  }
  let label1 = new StuDent("Asger", "Agazade", "asgarya@code.edu.az", "2222222", "26");

  console.log(label1.firstName)



