let minLength = 3;
let minPasswordLength = 8;

function validate(id){
     // Get form field values
    var fieldValue = document.getElementById(id).value;
    var error = document.getElementById(id + "-error")
    
    switch (id) {
        case "FirstName":
          if (fieldValue.length < minLength) {
            error.innerHTML = `Name must be at least ${minLength} characters long`;
            error.style.display = "block";
          } else {
            error.innerHTML = "";
          }
          break;
        case "LastName":
            if (fieldValue.length < minLength) {
                error.innerHTML = `Name must be at least ${minLength} characters long`;
                error.style.display = "block";
            } else {
                error.innerHTML = "";
            }
            break;
        case "email":
          // A simple regex for email validation
          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!regex.test(fieldValue)) {
            error.innerHTML = "Please enter a valid email address";
            error.style.display = "block";
          } else {
            error.innerHTML = "";
          }
          break;
        case "password":
          if (fieldValue.length < minPasswordLength) {
            error.innerHTML = `Password must be at least ${minPasswordLength} characters long`;
            error.style.display = "block";
          } else {
            error.innerHTML = "";
          }
          break;
        case "confirmPass":
          var password = document.getElementById("password").value;
          if (fieldValue !== password) {
            error.innerHTML = "Passwords do not match";
            error.style.display = "block";
          } else {
            error.innerHTML = "";
          }
          break;
        case "phone":
            let phoneRegex = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/
            if (!phoneRegex.test(fieldValue)) {
                error.innerHTML = "Please enter a valid phone number format"
                error.style.display = "block";
            } else {
                error.innerHTML = "";
            }
            break

        default:
          // Do nothing
      }
}

function clearError() {
    var error = document.getElementById("name-error");
    error.innerHTML = "";
    submit.disabled = "false";
  }

var form = document.getElementById("form");
var spans = document.querySelectorAll("span");
var submit = document.getElementById("submit");

// Add an event listener to the submit event
form.addEventListener("submit", function(event) {
    // Loop through the spans and check if any of them have text content
    for (var i = 0; i < spans.length; i++) {
      if (spans[i].textContent !== "") {
        // There is an error, prevent the form submission
        event.preventDefault();
        // Display a message
        alert("Please fix the errors before submitting the form.");
        return false;
      }
    }
  
    // There is no error, allow the form submission
    return true;
  });

// Get all the input elements
var inputs = document.querySelectorAll("input");

// Loop through them and add event listeners
for (var i = 0; i < inputs.length; i++) {
  // Add a focus event listener to clear the error
  inputs[i].addEventListener("focus", function() {
    clearError();
  });

  // Add a blur event listener to validate the input
  inputs[i].addEventListener("blur", function() {
    validate(this.id);
  });
}

// Add an event listener to the submit event
form.addEventListener("submit", function(event) {
    // Disable the submit button
    submit.disabled = true;
  });