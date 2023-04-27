const nameInput = document.querySelector(".name");
const surNameInput = document.querySelector(".surname");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const checkbox = document.querySelector(".checkbox");
const labelChecked = document.querySelector("#labelChecked");
const submitBtn = document.querySelector(".submitBtn");
const radio = document.querySelectorAll(".radio");

nameInput.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
});
nameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";

});

surNameInput.addEventListener("mouseover", function () {
  this.style.backgroundColor = "darkGreen";
});
surNameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

emailInput.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});

emailInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});


passwordInput.addEventListener("focus", function () {
  this.value = "Rashid";
});
passwordInput.addEventListener("mouseout", function () {
  this.value = "";
});

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    labelChecked.style.visibility = "visible";
  } else {
    labelChecked.style.visibility = "hidden";
  }
});

submitBtn.disabled=true
checkbox.addEventListener("change",function(){
    if(nameInput.value && surNameInput.value && checkbox.checked){
        submitBtn.removeAttribute("disabled")
    }else{
        submitBtn.disabled=true
    }
})
nameInput.addEventListener("change",function(){
    if(nameInput.value && surNameInput.value && checkbox.checked){
        submitBtn.removeAttribute("disabled")
    }else{
        submitBtn.disabled=true
    }
})
surNameInput.addEventListener("change",function(){
    if(nameInput.value && surNameInput.value && checkbox.checked){
        submitBtn.removeAttribute("disabled")
    }else{
        submitBtn.disabled=true
    }
})


radio.forEach((item)=>item.addEventListener("click",function(){
    alert("finished!")
}))

