const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function showError(input,message){
  const formControl=input.parentElement;
  formControl.className='form-control error';
  const small=formControl.querySelector('small');
  small.innerText=message;
}

function showSuccess(input){
  const formControl=input.parentElement;
  formControl.className='form-control success';
}
//search on google js email regex
function checkEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  if(re.test(input.value)){
    showSuccess(input);
  }else{
    showError(input,'Email is not Valid');
  }
}

//check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    //console.log(input)
    if(input.value.trim()===''){
      //console.log(input.id)
    //  showError(input,'${input.id} is Required');
     showError(input, '${getFieldName(input)} is required');
    }else{
      showSuccess(input);
    }
  });
}

//check password match
function checkPasswordsMatch(input1,input2){
  if(input1.value !== input2.value){
    showError(input2,'Passwords do not match')
  }
}

//to capitalize the first letter
function getFieldName(input){
  return input.id.charAt(0).toUpperCase+input.id.slice(1);
}

form.addEventListener('submit',function(e){
  e.preventDefault();
//   if(username.value===''){
//     //alert('Username is required');
//    showError(username,'Username is required');
//  }else{
//    showSuccess(username);
//  }
//
//
//  if(email.value===''){
//   showError(email,'Email is required');
// }else{
//   showSuccess(email);
// }
//
//
// if(password.value===''){
//  showError(password ,'Password is required');
// }else{
//  showSuccess(password);
// }
//
//
// if(password2.value===''){
//  showError(password2 ,'Password is required');
// }else{
//  showSuccess(password);
// }
  //console.log(username)  console.log(username.value)
  //console.log('submit');
  checkRequired([username,email,password,password2]);
  checkEmail(email);
  checkPasswordsMatch(password,password2);
});
