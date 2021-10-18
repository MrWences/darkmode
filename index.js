const toggleEl = document.getElementById("toggle-el");

toggleEl.addEventListener("click", function (e) {
  toggleEl.classList.toggle("active");
  document.body.classList.toggle("dark");
});
