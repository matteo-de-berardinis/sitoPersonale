document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill-item");

    skillItems.forEach(function (item) {
        item.addEventListener("mouseover", function () {
            this.classList.add("animate");
        });

        item.addEventListener("mouseout", function () {
            this.classList.remove("animate");
        });
    });
});
