let em = "";

function isValidEmail() {
    em = $.trim($("input[name='email']").val());
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // \. mean you must have period
    if (emailPattern.test(em)) {
        return true;
    }
    else {
       // Add your code here to handle the error. 
       $("#emailErrorMessage").html("Missing or invalid email");
       return false;  
    }
 }
 function doPasswordsMatch() {
   let password1 = $("input[name= 'password1']").val();
   let password2 = $("input[name= 'password2']").val();
   if ((password1 !='') && (password1 === password2)) {
      return true;
 }
 else {
   $("#passwordErrorMessage").html("Passwords missing or do not match");
   return false;
   }
   }
   function clearResults() {
      $('#output').empty();
      $('#passwordErrorMessage').empty();
      $('#emailErrorMessage').empty();
   }
 $("input").focus(function() {
    clearResults();
 }); 

 $(document).on("submit", function(e) {
   e.preventDefault();
   clearResults();
   if (doPasswordsMatch() && isValidEmail()) {
      var emvalue = '<p>' + em + '</p>';
      $('#output').append("<p>Form output:</p>");
      $('#output').append(emvalue);
      $('#output').append('Passwords match');
 }});


