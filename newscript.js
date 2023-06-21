let info = [];
let data = {};
let updateIndex = null;

function submitOrUpdate() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("class").value;
  
  if (updateIndex !== null) {
    // Update existing student
    info[updateIndex] = {
      name: name,
      age: age,
      class: grade
    };
    updateIndex = null;
    document.getElementById("update").innerHTML = "Submit";
  } else {
    // Add new student
    data = {
      name: name,
      age: age,
      class: grade
    };
    info.push(data);
  }
  
  document.getElementById("registration-form").reset();
  updateTable();
  console.log(info);
}

function updateTable() {
  let tbody = document.getElementById("tab1");
  tbody.innerHTML = "";
  
  for (let i = 0; i < info.length; i++) {
    let student = info[i];
  
    let row = document.createElement("tr");
    row.innerHTML =
      "<td>" + (i + 1) + "</td>" +
      "<td>" + student.name + "</td>" +
      "<td>" + student.age + "</td>" +
      "<td>" + student.class + "</td>" +
      "<td><button onclick='edit(" + i + ")' class='btn-submit'>Edit</button><b>|</b><button onclick='remove(" + i + ")' class='btn-delete'>Delete</button><b>|</b><button class='btn-down' onclick='down("+i+")'>Down<i class='arrow down '></i></button><b>|</b><button class='btn-up' onclick='up("+i+")'>UP<i class='arrow up '></i></button>";
  
    tbody.appendChild(row);
  }
}

function edit(i) {
  let updateInfo = info[i];
  document.getElementById("name").value = updateInfo.name;
  document.getElementById("age").value = updateInfo.age;
  document.getElementById("class").value = updateInfo.class;
  
  updateIndex = i;
  document.getElementById("update").innerHTML = "Update";
}

function remove(i) {
  info.splice(i, 1);
  updateTable();
}
 
function down(i){
  let val=info[i];
  if(info[i+1]!=null){
    let val1=info[i+1];
    // remove(i);
    // console.log(val.class);
    // console.log(temp);
    // updateTable();
    info[i+1]={
      name: val.name,
      age: val.age,
      class: val.class
    };
    info[i]={
      name: val1.name,
      age: val1.age,
      class: val1.class
    };
  }
  else{
    window.alert("This is the last position.There is no last position below there!!!!")
  }
 
  // remove(i);

  // console.log(val.name);
  // info[i+1]=val;
  updateTable();
 }

 function up(i){
  let upVal=info[i];
  if(info[i-1]!=null){
    let upVal1=info[i-1];

    info[i-1]={
      name:upVal.name,
      age:upVal.age,
      class:upVal.class
    };
  
    info[i]={
      name:upVal1.name,
      age:upVal1.age,
      class:upVal1.class
    };
  }
  else{
    window.alert("This is the First position.There is no First position above there!!!!")
  }
  updateTable();
 }