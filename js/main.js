

var bookMarkName = document.getElementById('bm');
var siteName = document.getElementById('ur');
var valid = document.querySelector('.valid');



var data = [];

if(localStorage.getItem("alldata") != null){
  data = JSON.parse(localStorage.getItem("alldata"));
  console.log(data);
  displayData();
}

// add name and url

function add(){

 var errmsg = validForm();
 if(errmsg == true){
      var allData = {
  name: bookMarkName.value,
  site: siteName.value
}

data.push(allData);
localStorage.setItem("alldata",JSON.stringify(data))
clearForm()

displayData()
 }

 else if(errmsg == false){
valid.classList.add('d-flex')
valid.addEventListener('click',function(){
  valid.classList.remove('d-flex')
})
 }

  }






// clear form

function clearForm(){
  bookMarkName.value = "";
  siteName.value = "";

}

// display data


function displayData(){
  var content = "";
  for(var i = 0 ; i < data.length ; i++){
    content +=     `  <tr>
    <td>${i + 1}</td>
    <td>${data[i].name}</td>
    <td>
      <a href=${data[i].site} target= _blank class="btn btn-visit">visit</a>
    </td>
    <td>
      <button onclick="deletElement(${i})" class="btn btn-delete">delete</button>
    </td>
   </tr>`
  }
  document.getElementById('tb').innerHTML = content;
}





// deleteElement

function  deletElement(ind){
 data.splice(ind,1);
 localStorage.setItem("alldata",JSON.stringify(data))
 displayData()
}



function validForm(){
 
 
    var nameRegex = /^[a-z]{5,10}$/ 
    var siteRegex = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/ 

    if(nameRegex.test(bookMarkName.value) == false  ){
     
      return false;
    }
    else if(siteRegex.test(siteName.value) == false){

      return false;
    }

    return true;
}


