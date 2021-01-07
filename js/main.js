var addBtn =document.getElementById('addBtn');

var employeeName =document.getElementById('employeeName');
var employeeAge =document.getElementById('employeeAge');
var employeeSalary =document.getElementById('employeeSalary');
var employeePhone =document.getElementById('employeePhone');

var input= document.getElementsByClassName('form-control');


var nameAlert=document.querySelector('.alert-name') ; // validation
var ageAlert=document.querySelector('.alert-age');// validation

var employee;
if(localStorage.getItem('empList')==null){
 employee=[];
}
else{
   employee=JSON.parse( localStorage.getItem('empList'));
   displayEmployee();
}

addBtn.onclick=function(){
    addEmployee();
    displayEmployee();
    reset();
}
 
function addEmployee(){
    
    var employment={
        employeeName:employeeName.value,
        employeeAge:employeeAge.value,
        employeeSalary:employeeSalary.value,
        employeePhone:employeePhone.value
    };
    employee.push(employment);
    localStorage.setItem('empList',JSON.stringify(employee));
}


function displayEmployee(){
 var trs ="";
 for(var i=0;i<employee.length;i++){
     trs+= `<tr>
                <td>`+employee[i].employeeName+`</td>
                <td>`+employee[i].employeeAge+`</td>
                <td>`+employee[i].employeeSalary+`</td>
                <td>`+employee[i].employeePhone+`</td>
                <td><button class="btn btn-danger" onclick="deletEmp(`+i+`)">Delete</button></td>
         </tr>`
 }
 document.getElementById('tableBody').innerHTML=trs;
}



function reset(){
    for(var i=0;i<input.length;i++){
        input[i].value='';
    }
}


function deletEmp(index){
    employee.splice(index,1);
    localStorage.setItem('empList',JSON.stringify(employee));
    displayEmployee();
}



function surch(surchTxt){
    var trs ="";
 for( var i=0;i<employee.length;i++){
     if(employee[i].employeeName.toLowerCase().includes(surchTxt.toLowerCase()))
     trs+= `<tr>
                <td>`+employee[i].employeeName+`</td>
                <td>`+employee[i].employeeAge+`</td>
                <td>`+employee[i].employeeSalary+`</td>
                <td>`+employee[i].employeePhone+`</td>
                <td><button class="btn btn-danger" onclick="deletEmp(`+i+`)">Delete</button></td>
         </tr>`
 }
 document.getElementById('tableBody').innerHTML=trs;
}
 
/*
var regex =/a/;   //  بمجرد ما احط السلاش بفهم انه نمط 
var userName ="sos";
console.log(regex.test(userName))  // بفحصلي النمط وبرجعلي ترو او فولس
*/


// validation name
employeeName.addEventListener('keyup',function()
{
    var nameRegex=/^[A-Z][a-z]{2,7}$/;  // اول حرف يكون كابيتال وبعدها سمول       ^ : اول حرف    $: اخر حرف
    if(nameRegex.test(employeeName.value)) 
    {
      employeeName.classList.add('is-valid');
      employeeName.classList.remove('is-invalid');
      addBtn.removeAttribute('disabled'); 
      nameAlert.style.display='none';
    }
    else
    {
      employeeName.classList.add('is-invalid');
      employeeName.classList.remove('is-valid');
      addBtn.setAttribute('disabled','true'); // حتى تتعطل البتون
      nameAlert.style.display='block'; // هاي عشان صندوق التحذير 
    }


});    
   




// validation ege :

employeeAge.addEventListener('keyup',function()
{
    var ageRegex=/^([2-7][0-9]|80)$/;
    if(ageRegex.test(employeeAge.value))
    {
        employeeAge.classList.add('is-valid');
        employeeAge.classList.remove('is-invalid');
        addBtn.removeAttribute('disabled');
        ageAlert.style.display='none';

    }
    else
    {
        employeeAge.classList.add('is-invalid');
        employeeAge.classList.remove('is-valid');
        addBtn.setAttribute('disabled','true');
        ageAlert.style.display='block';
    
    }

});



// validation phone :
 employeePhone.addEventListener('keyup',function()
 {
  var phoneregex=/^(0097)[02][0-9]{9}$/;   
  if( phoneregex.test(employeePhone.value))
{
     
     employeePhone.classList.add('is-valid');
     employeePhone.classList.remove('is-invalid');
     addBtn.removeAttribute('disabled');
     
 }
 else{
     
    employeePhone.classList.add('is-invalid');
    employeePhone.classList.remove('is-valid');
    addBtn.setAttribute('disabled','true');
 }
 })
