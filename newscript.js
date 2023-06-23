let info = [];
let normal_arr=[];
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

    normal_arr[updateIndex] = {
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
    normal_arr.push(data);
  }
  
  document.getElementById("registration-form").reset();
  updateTable();
  console.log(info);
}
const newarr=info;
function updateTable(filteredArray) {
  let tbody = document.getElementById("tab1");
  tbody.innerHTML = "";
  // console.log("filter",filteredArray);
  // console.log("nonfilter",info);
  let newarr = filteredArray || info;
  // console.log("normal array",newarr);
  for (let i = 0; i < newarr.length; i++) {
    let student = newarr[i];
  
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
  console.log("ok");
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


// for search bar
 function find() {
  let searchValue = document.getElementById("search").value.toLowerCase();
  console.log(searchValue.trim());
  if (searchValue.trim() !== "") {
    let filteredArray = info.filter(function (val) {
      return (
        val.name.toLowerCase().includes(searchValue) ||
        val.age.toLowerCase().includes(searchValue) ||
        val.class.toLowerCase().includes(searchValue)
      );
    });
    updateTable(filteredArray);
  } else {
    updateTable();
  }
}


// for filter

function filter(){
  // console.log(typeof(value));
  let filval=document.getElementById("filter").value;
  console.log(filval);
  if(filval==="Age"){
    console.log("ok");
    age();
  }
  else if(filval==="de-Age"){
    console.log("ok");
    de_age();
  }
  else if(filval==="Alpha"){
    Alpha();
  }
  else if(filval==="deAlpha"){
    deAlpha();
  }
  else if(filval==="normal"){
    normal();
  }
  else{
    console.log("it wont run")
  }
}




function age(){
  console.log("ok");
  info.sort((a,b)=>{
    return a.age-b.age;
  });
  updateTable();
}

function de_age(){
  console.log("ok");
  info.sort((a,b)=>{
    return b.age-a.age;
  });
  updateTable();
}

// For the bring back the table into its original position
function normal(){
  updateTable(normal_arr);
}

// for the sorting the table in alphabetical ascending order

function Alpha(){
  info.sort((a,b)=>{
    let first=a.name.toLowerCase();
    let second=b.name.toLowerCase();

    if(first<second){
      return -1;
    }
    else{
      return 1;
    }
    return 0;
  });
  updateTable();
}

function deAlpha(){
  info.sort((a,b)=>{
    let first=a.name.toLowerCase();
    let second=b.name.toLowerCase();

    if(first<second){
      return 1;
    }
    else{
      return -1;
    }
    return 0;
  });
  updateTable();
}
