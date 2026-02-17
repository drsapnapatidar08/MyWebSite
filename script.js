const buttons = document.querySelectorAll("a.btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 220);
  });
});
