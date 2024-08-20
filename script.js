const btnSubmit = document.querySelector("#button");

btnSubmit.addEventListener("click", function () {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  const regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const errormail = document.querySelector(".error-email");

  const check = emailValue.match(regex);

  const ps = document.querySelector("#ps");

  const submitEmail = document.querySelector(".submit-email");

  if (check) {
    ps.style.display = "grid";

    submitEmail.style.display = "none";
    errormail.innerHTML = "";
  } else {
    errormail.innerHTML = "Vui lòng nhập đúng định dạng email";
    errormail.style.color = "red";
  }
});
const btnSubmit1 = document.querySelector("#n1");
ps.style.display = "none";
btnSubmit.addEventListener("click", function () {
  const submitEmail = document.querySelector(".submit-email");

  if (check) {
    ps.style.display = "grid";

    submitEmail.style.display = "none";
    errormail.innerHTML = "";
  } else {
    errormail.innerHTML = "Vui lòng nhập đúng định dạng email";
    errormail.style.color = "red";
  }
});
let buttons = document.querySelectorAll(".btn btn-dark");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let parent = button.closest(".p");
    let chitiet = parent.querySelector(".an");
    chitiet.classList.remove(".p");
  });
});
document.getElementById("btn1").onclick = function () {
  document.getElementById("content").style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "block";
};

document.getElementById("btn2").onclick = function () {
  document.getElementById("content").style.display = "block";
  btn2.style.display = "none";
  btn1.style.display = "block";
};
// nuts 2
document.getElementById("btn3").onclick = function () {
  document.getElementById("content1").style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "block";
};

document.getElementById("btn4").onclick = function () {
  document.getElementById("content1").style.display = "block";
  btn4.style.display = "none";
  btn3.style.display = "block";
};
// nut 3
document.getElementById("btn5").onclick = function () {
  document.getElementById("content2").style.display = "none";
  btn5.style.display = "none";
  btn6.style.display = "block";
};

document.getElementById("btn6").onclick = function () {
  document.getElementById("content2").style.display = "block";
  btn6.style.display = "none";
  btn5.style.display = "block";
};
// nut 4
document.getElementById("btn7").onclick = function () {
  document.getElementById("content3").style.display = "none";
  btn7.style.display = "none";
  btn8.style.display = "block";
};

document.getElementById("btn8").onclick = function () {
  document.getElementById("content3").style.display = "block";
  btn8.style.display = "none";
  btn7.style.display = "block";
};
// thuws 5
document.getElementById("btn9").onclick = function () {
  document.getElementById("content4").style.display = "none";
  btn9.style.display = "none";
  btn10.style.display = "block";
};

document.getElementById("btn10").onclick = function () {
  document.getElementById("content4").style.display = "block";
  btn10.style.display = "none";
  btn9.style.display = "block";
};
// nuts thuws 6
document.getElementById("btn11").onclick = function () {
  document.getElementById("content5").style.display = "none";
  btn11.style.display = "none";
  btn12.style.display = "block";
};

document.getElementById("btn12").onclick = function () {
  document.getElementById("content5").style.display = "block";
  btn12.style.display = "none";
  btn11.style.display = "block";
};
