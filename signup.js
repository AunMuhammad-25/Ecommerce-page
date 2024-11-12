$(function() {

    $("#signupForm").on("submit", function(e){
     e.preventDefault();
 
     var fname = $("#username").val();
     var lname = $("#email").val();
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
        $("#span3").text("This field is required")
    }
    else{
        $("#span3").text("")
    }
     
    if(nname == ""){
        $("#span4").text("This field is required")
    }
    else{
        $("#span4").text("")
    }
     if(fname !== "" && lname !== "" && mname !== "" && nname !== "" ){
         window.location.href = "thankyou.html"
     }
 
    })
 });