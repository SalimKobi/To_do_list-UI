let darkMode = localStorage.getItem("darkMode");
let savedText = localStorage.getItem("savedText");
const darkModeToggle = document.querySelector(".btn");
const boxes = document.querySelector(".box");
let background = document.querySelector(".Container");
const edit = document.querySelector(".makeEdit");
let Data = [];
let TextEdit = true;

// API consumption
const apiUrl = `https://jsonplaceholder.typicode.com/posts`;

async function getData() {
  try {
    const response = await fetch(apiUrl);
    Data = await response.json();
    console.log(Data);
    displayPhotos();
  } catch (error) {
    //catch Error
  }
}

// window.location.href=
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

if (darkModeToggle) {
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
}

console.log("kobi");

function disableTxt() {
  document.getElementById("titleText").disabled = true;
  document.getElementById("bodyText").disabled = true;
}
function undisableTxt() {
  document.getElementById("titleText").disabled = false;
  document.getElementById("bodyText").disabled = false;
}

edit.addEventListener("click", () => {
  if (TextEdit) {
    undisableTxt();
    TextEdit = false;
    console.log("enable");
  } else {
    disableTxt();
    TextEdit = true;
    console.log("disable");
  }
});

disableTxt();

// let btn = document.querySelector(".Container");
// function myFunction() {
//   btn.classList.toggle("darkMode");
//   console.log(`done!`);
// }

//Local storage for text
// const enableDarkMode = () => {
//     // 1. Add class dark mode to the body
//     document.body.classList.add("darkmode");
//     //2.Update dark mode in the local storage
//     localStorage.setItem("darkMode", "enabled");
//   };
//   const disableDarkMode = () => {
//     // 1. Add class dark mode to the body
//     document.body.classList.remove("darkmode");
//     //2.Update dark mode in the local storage
//     localStorage.setItem("darkMode", null);
//   };

// const showtext = () => {
//   //1. Capture text from text area
//   document.getElementById("titleText").value;
//   localStorage.setItem("savedText", "yes");
// };
// const notext = () => {
//   //1. Capture text from text area
//   document.getElementById("titleText").value;
//   localStorage.setItem("savedText", null);
// };
// if (boxes) {
//   boxes.addEventListener("click", () => {
//     darkMode = localStorage.getItem("savedText");
//     if (document.getElementById("titleText").value) {
//       showtext();
//     } else {
//       notext();
//     }
//   });
// }
