$(function() {

    $("#signupForm").on("submit", function(e){
     e.preventDefault();
 
     var fname = $("#username").val();
     var lname = $("email").val();
     var mname = $("#password").val();
     var nname = $("#confirmpassword").val();
 
 
     if(fname == ""){
         $("#span1").text("This field is required")
     }
     else{
         $("#span1").text("")
     }if(lname == ""){
         $("#span2").text("This field is required")
     }
     else{
         $("#span2").text("")
     }
     if(mname == ""){
        $("#span1").text("This field is required")
    }
    else{
        $("#span1").text("")
    }if(nname == ""){
        $("#span2").text("This field is required")
    }
    else{
        $("#span2").text("")
    }
     if(fname !== "" && lname !== "" && mname !== "" && nname !== "" ){
         window.location.href = "thankyou.html"
     }
 
    })
 });