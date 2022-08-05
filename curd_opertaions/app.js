let selectedRow = null;
let formArray = [];




function onFormSubmit() {
  let formData = readFormData();
 if (selectedRow == null) insertNewRecord(formData);
  else  updateRecord();
  resetForm();

}

function readFormData() {
  let formData = {};
  formArray.push(formData);
  console.log(formArray);
  formData["qualification"] = document.getElementById("qualification").value;
  formData["institution"] = document.getElementById("institution").value;
  formData["yearOfPassing"] = document.getElementById("yearOfPassing").value;
  formData["percentage"] = document.getElementById("percentage").value;
  return formData;

}

function insertNewRecord(data) {
  let table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.qualification;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.institution;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.yearOfPassing;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.percentage;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button type="button" class="btn btn-success" data-bs-toggle="modal"data-bs-target="#editModal" onclick="onEdit(${newRow.rowIndex - 1})">Edit</button>
                        <button type="button" class="btn btn-danger" onclick="onDelete(this)">Delete</button>`;
}

function resetForm() {
  document.getElementById("qualification").value = "";
  document.getElementById("institution").value = "";
  document.getElementById("yearOfPassing").value = "";
  document.getElementById("percentage").value = "";
  selectedRow = null;
}

function onDelete(tr) {
  if (confirm("Are you sure to delete this record ?")) {
    var row = tr.parentNode.parentNode;
    row.parentNode.removeChild(row);
    resetForm();
  }
}

function onEdit(rowIndex) {

  let data = formArray[rowIndex];
  document.getElementById("edit_qualification").value = data.qualification;
  document.getElementById("edit_institution").value =  data.institution;
  document.getElementById("edit_yearOfPassing").value = data.yearOfPassing;
  document.getElementById("edit_percentage").value =  data.percentage;

}
function updateRecord() {
 


}






// function insertNewRecord() {
       
    
//     var tableDetails = "<tr><th>qualification</th><th>institution</th><th>yearOfPassing</th><th>percentage</th></tr>";
//     tableDetails += "<tbody>";

//     for (let i = 0; i < formData.length; i++) {
//         var tableDet = formData[i];
//         console.log(tableDet);  
//     }
//     tableDetails += "<tr>" + 
//     "<td>"+tableDet.qualification+"</td>" + 
//     "<td>"+tableDet.institution+"</td>" +
//     "<td>"+tableDet.yearOfPassing+"</td>" + 
//     "<td>"+tableDet.percentage+"</td>" +  
//     "</tr>"  
  
//     tableDetails += "</tbody>";
//        document.getElementById("studentList").innerHTML = tableDetails;
// }

