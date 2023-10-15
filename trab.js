var NPCcharacters = [];

function CreateChar() {
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var successMessage = document.getElementById("success");
    var errorMessage = document.getElementById("error");
  
    if (name === "" || role === "") {
      errorMessage.classList.remove("hidden");
      successMessage.classList.add("hidden");
    } else {
      errorMessage.classList.add("hidden");
      successMessage.classList.remove("hidden");

      NPCcharacters.push({ name: name, role: role });
      ShowTable();
  
      // PEsquisei na net   https://nodejs.reativa.dev/0032-javascript-timers/index
      setTimeout(function () {
        successMessage.classList.add("hidden");
      }, 3000);
    }
  }
  function ShowTable() {
    var table = document.getElementById("charTable");
  
   
    table.innerHTML = '<tr><th>Nome</th><th>Classe</th></tr>';
    
    for (var i = 0; i < NPCcharacters.length; i++) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = NPCcharacters[i].name;
      cell2.innerHTML = NPCcharacters[i].role;
    }
  
    table.classList.remove("hidden");
}
  