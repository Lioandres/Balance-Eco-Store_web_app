// Get the input fields

var firstName = document.getElementById("fName");
var email = document.getElementById("fEmail");
var address = document.getElementById("fAddress");
var lastName = document.getElementById("fLastN");
var password = document.getElementById("fPassword");
var phone = document.getElementById("fPhone");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validate() {
  // Validate fields entered by the user: name, phone, password, and email
  let error=0

  if (firstName.value.trim().length < 3 || checkHasNumber(firstName.value) ) {
    firstName.classList.add("is-invalid");
    firstName.classList.remove("is-valid");
    error++
  } else {
    firstName.classList.add("is-valid");
    firstName.classList.remove("is-invalid");
  }

  if (email.value.trim().length < 3 || !email.value.includes("@")) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    error++
  } else {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  }

  if (address.value.trim().length < 3) {
    address.classList.add("is-invalid");
    address.classList.remove("is-valid");
    error++
  } else {
    address.classList.add("is-valid");
    address.classList.remove("is-invalid");
  }


  if (lastName.value.trim().length < 3 || checkHasNumber(lastName.value)) {
    lastName.classList.add("is-invalid");
    lastName.classList.remove("is-valid");
    error++
  } else {
    lastName.classList.add("is-valid");
    lastName.classList.remove("is-invalid");
  }

  if (password.value.trim().length < 3 || !checkHasNumber(password.value) || !checkHasLetters(password.value))  {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    error++
  } else {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
  }

  if (phone.value.trim().length < 8 || checkHasLetters(phone.value)) {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    error++
  } else {
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  }

  if(error!=0) alert('El fomulario no esta completado correctamente')
  if(error===0) alert('El fomulario ha sido validado correctamente')

  function checkHasLetters(str){
    return /\D/.test(str);
  }
  function checkHasNumber(str){
      let hasNumber=false
      for (i=0;i<=9;i++){
           if(str.includes(i)) hasNumber=true
      }
      return hasNumber
  }

}
