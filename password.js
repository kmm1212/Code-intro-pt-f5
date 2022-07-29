passw = "Helloworld1"

function passwordcheck(passw){
let letter = /[a-z]/;
let upper  =/[A-Z]/;
let number = /[0-9]/;

if(passw.length < 10 || !letter.test(passw) || !number.test(passw) || !upper.test(passw)) {
  if(passw.length < 10){
    console.log("Please make sure password is longer than 9 characters.")
    return false;
  }
  if(!letter.test(passw)){
    console.log("Please make sure password includes a lowercase letter.")
    return false;
  }
  if(!number.test(passw)){
    console.log("Please make sure Password Includes a Digit")
    return false;     
  }
  if(!upper.test(passw)) {
    console.log("Please make sure password includes an uppercase letter.");
    return false;
  }
  
  }
   else {
     console.log("Password is a success")
   }
}


passwordcheck(passw);