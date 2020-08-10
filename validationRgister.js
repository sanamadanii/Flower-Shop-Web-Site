function validationRegister()
{
     if(document.f.fname.value == "") {
      alert("Error! please enter your first name");
     
    }
    if(document.f.Lname.value == "") {
      alert("Error! please enter your last name");
    
    }
    
    if(document.f.pass1.value == "") {
      alert("Error! please enter a password");
    }
    var phoneno = /^\d{11}$/;  
  if(!document.f.num.value.match(phoneno))
      {
          alert("Error! invalid phone number")
      }
    
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.f.mail.value))
        {
            alert("Error! invalid email address");
        }
    if(document.f.pass1.value != "" && document.f.pass1.value == document.f.pass2.value) {
      if(document.f.pass1.value.length < 6) {
        alert("Error! Password must contain at least six characters");
    
      }
    }
      re = /[0-9]/;
      if(!re.test(document.f.pass1.value)) {
        alert("Error! Password must contain at least one number from 0 to 9!");
   
      }
      re = /[a-z]/;
      if(!re.test(document.f.pass1.value)) {
        alert("Error! Password must contain at least one lowercase letter from a to z!");
      }
      re = /[A-Z]/;
      if(!re.test(document.f.pass1.value)) {
        alert("Error! password must contain at least one uppercase letter from A to Z!");
       
      }
   
      if(document.f.pass1.value != document.f.pass2.value)
          {
             alert('Error! password not match');
              
          }
    
    
    
    
}