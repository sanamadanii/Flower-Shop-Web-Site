function ValidateLoging()
{
    if (document.F.N1.value=="")
        {
            alert("Error! please enter your username.. ");
            return false;
        }
     if(document.F.N2.value == "" ) {
      
        alert("Error! please enter your password..");

        return false;
     }
    /*
    else if (document.F.N1.value!="" && document.F.N2.value == "" ) //sql 
        {
             alert( "validation succeeded" );
              location.href="home.html";
               return true;
        }
        */
    

}
