let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".btn");
let background = document.querySelector(".Container");

const enableDarkMode = () => {
  // 1. Add class dark mode to the body
  document.body.classList.add("darkmode");
  //2.Update dark mode in the local storage
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  // 1. Add class dark mode to the body
  document.body.classList.remove("darkmode");
  //2.Update dark mode in the local storage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});

console.log("kobi");
// let btn = document.querySelector(".Container");
// function myFunction() {
//   btn.classList.toggle("darkMode");
//   console.log(`done!`);
// }
