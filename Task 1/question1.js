
function addNewRow(){
    var table = document.getElementById("inputTable");
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var eye = document.getElementById("eyeColour").value;
    var row = table.insertRow(table.rows.length);
    
 
    
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = dob;
    row.insertCell(2).innerHTML = eye;
    row.insertCell(3).innerHTML = "<input type='button'; onclick='deleteRow()'; value='delete'>";
    
    changeCounter();
    
    clearForm();
  
}

function changeCounter ()
{
    var length = document.getElementById("inputTable").rows.length - 1;
    
    document.getElementById("inputted").innerHTML = "<h1> Inputted Data, length =" + length + "</h1>";

}


function clearForm()
{
    document.getElementById("name").value = null;
    document.getElementById("dob").value = null;
    document.getElementById("eyeColour").value = null;
}

function deleteRow()
{
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
    changeCounter();
}



