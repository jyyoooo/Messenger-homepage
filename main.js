function validate()
{
    var username = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputPassword1");

    if(username.value.trim()=="")
    {
        alert("Enter valid Email or Phone number");
        return false;
    }
    else if(password.value.trim().length<7)
    {

        alert("Enter valid password");
        return false;
    }
    else{
        return true;
    }
}
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}