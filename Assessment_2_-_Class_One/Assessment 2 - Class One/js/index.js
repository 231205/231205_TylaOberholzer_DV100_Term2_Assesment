
var students = [];

function registerStudent() {

  var firstName = document.getElementById("first").value;
  var lastName = document.getElementById("last").value;
  var studentNumber = document.getElementById("number").value;
  var subjectOne = document.getElementById("subOne").value;
  var subjectTwo = document.getElementById("subTwo").value;
  var yearLevel = document.querySelector('input[name="baseRadio"]:checked').value;


  var student = {
    firstName: firstName,
    lastName: lastName,
    studentNumber: studentNumber,
    subjectOne: subjectOne,
    subjectTwo: subjectTwo,
    yearLevel: yearLevel
  };


  students.push(student);


  updateClassList();

 
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("number").value = "";
  document.getElementById("subOne").value = "Select An Option";
  document.getElementById("subTwo").value = "Select An Option";
  document.getElementById("one").checked = true;
}


function updateClassList() {
  var classList = document.getElementById("studentOut");
  classList.innerHTML = "";


  students.forEach(function(student) {
    var studentCard = document.createElement("div");
    studentCard.className = "col-4";
    studentCard.innerHTML = `
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">${student.firstName} ${student.lastName}</h5>
          <p>Student Number: ${student.studentNumber}</p>
          <p>Year: ${student.yearLevel}</p>
          <p>Choice One: ${student.subjectOne}</p>
          <p>Choice Two: ${student.subjectTwo}</p>
        </div>
      </div>
    `;
    classList.appendChild(studentCard);
  });
}


document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 
  registerStudent(); 
});
