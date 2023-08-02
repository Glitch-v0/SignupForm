 // Get form field values
 var firstName = document.getElementById("FirstName").value;
 var lastName = document.getElementById("LastName").value;
 var email = document.getElementById("email").value;
 var phone = document.getElementById("phone").value;
 var password = document.getElementById("password").value;
 var confirmPass = document.getElementById("confirmPass").value;
 let minLength = 3;
 let minPasswordLength = 8;

function validate(id){
    var fieldValue = document.getElementById(id).value;
    var error = document.getElementById(id + "-error")
    switch (id) {
        case "FirstName":
          if (fieldValue.length < minLength) {
            error.innerHTML = `Name must be at least ${minLength} characters long`;
            error.style.display = "block";
          } else {
            error.style.display = "none";
          }
          break;
        case "LastName":
            if (fieldValue.length < minLength) {
                error.innerHTML = `Name must be at least ${minLength} characters long`;
                error.style.display = "block";
            } else {
                error.style.display = "none";
            }
            break;
        case "email":
          // A simple regex for email validation
          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!regex.test(fieldValue)) {
            error.innerHTML = "Please enter a valid email address";
            error.style.display = "block";
          } else {
            error.style.display = "none";
          }
          break;
        case "password":
          if (fieldValue.length < minPasswordLength) {
            error.innerHTML = `Password must be at least ${minPasswordLength} characters long`;
            error.style.display = "block";
          } else {
            error.style.display = "none";
          }
          break;
        case "confirmPass":
          var password = document.getElementById("password").value;
          if (fieldValue !== password) {
            error.innerHTML = "Passwords do not match";
            error.style.display = "block";
          } else {
            error.style.display = "none";
          }
          break;
        case "phone":
            let phoneRegex = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/
            if (!phoneRegex.test(fieldValue)) {
                error.innerHTML = "Please enter a valid phone number format"
                error.style.display = "block";
            } else {
                error.style.display = "none";
            }
            break

        default:
          // Do nothing
      }
}

function clearError() {
    var error = document.getElementById("name-error");
    error.style.display = "none";
  }