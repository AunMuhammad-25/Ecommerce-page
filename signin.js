$(function() {

    $("#signupForm").on("submit", function(e){
     e.preventDefault();
 
     var fname = $("#username").val();
     var lname = $("#password").val();
     console.log(fname, lname);
 
 
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
     if(fname !== "" && lname !== "" ){
         window.location.href = "thankyou.html"
     }
 
    })
 });