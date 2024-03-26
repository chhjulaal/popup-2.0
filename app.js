let ok = document.getElementById("ok");
ok.addEventListener("click", function () {
  let b = document.querySelector(".box");
  console.log(this);
  this.parentElement.style.display = "none";
  let sbmtBtn = document.getElementById("btn");
  sbmtBtn.style.display = "block";
});
let sbmtBtn = document.getElementById("btn");

sbmtBtn.addEventListener("click", function () {
  let bb = document.querySelector(".box");
  bb.style.display = "inline-block";
  sbmtBtn.style.display = "none";
});
