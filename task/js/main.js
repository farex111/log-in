// პაროლის გაქრობა და გამოჩენა 
let x = document.getElementById("pass");
function hideandshow() {
    let icons = document.querySelector(".bi");
    if (x.type == "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
    if(icons.classList[1]== "bi-eye-slash-fill"){
        icons.classList.replace("bi-eye-slash-fill", "bi-eye-fill");
    } else {
        icons.classList.replace("bi-eye-fill", "bi-eye-slash-fill");
    }
}
// პაროლის აღდგენა
let passwordResetStepper = {
  carentStep: -1,
  nextStep: function(){
    this.carentStep += 1;
    if(this.carentStep == 0){
     let visibleDiv = document.querySelector(".right-div-visible");
     visibleDiv.classList.remove("right-div-visible");
     let resetStep1 = document.getElementById("resetstep1");
     resetStep1.classList.add("right-div-visible");
    }
  }
}
let resetpass = document.getElementById("resetpass");
resetpass.addEventListener("click", function(){
  passwordResetStepper.nextStep();
})
$(document).ready(function(){
  // პაროლის ვალიდაცია
  $("#pass").keyup(function(){
    if(validatePassword()){
      $("#pass").css("border","1px solid #5FB2FF");
      $("#passmsg").html("<p class='text-success'>Password validated</p>").css("color","white");
      $(".bi").css("color", "white")
    }else{
      $("#pass").css("border","1px solid #FD0A50");
      $("#passmsg").html("<p class='text-danger'>თქვენს მიერ შეყვანილი პაროლი არასწორია</p>").css("color","#FD0A50");
      $(".bi").css("color", "#FD0A50")
    }
  });
});
function validatePassword(){
  var pass=$("#pass").val();
  if(pass.length > 7){
    return true;
  }else{
    return false;
  }
}