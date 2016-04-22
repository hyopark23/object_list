function onRegisterPressed() {
  var firstName = document.getElementById("firstname").value:
  var lastName = document.getElementById("lastname").value:
  
  var table = document.getElementById("mytable");
  var row = table.insertRow();
  var firstNameCell = row.insertCell(0);
  var lastNameCell = row.insertCell(0);

  firstNameCell.innerHTML = firstName;
  lastNameCell.innerHTML = lastName;
}
