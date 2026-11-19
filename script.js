let menuBtn = document.querySelector(".open-close");
let navLinks = document.querySelector(".nav-link");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("nav-open");
    menuBtn.classList.toggle("menu-opened");
});



let searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.value = localStorage.getItem("search") || "";

    searchInput.addEventListener("input", function () {
        localStorage.setItem("search", searchInput.value);
    });
}



let inputDate = document.getElementById("date");
let inputTime = document.getElementById("time");
let inputGuest = document.getElementById("guest");
let inputSummit = document.getElementById("summit");

inputSummit.addEventListener("click", function () {
    localStorage.setItem("date", inputDate.value);
    localStorage.setItem("time", inputTime.value);
    localStorage.setItem("guest", inputGuest.value);
    alert("Your Table Reserve!!")
})





localStorage.clear();