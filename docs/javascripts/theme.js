const themebutton = document.querySelector(".theme");
const html = document.documentElement;
const icon = document.querySelector(".theme img");

if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "light");
} else {
  if (localStorage.getItem("theme") === "dark") {
    html.classList.replace("light", "dark");
    icon.src = "../imgs/dark-mode.svg";
  } 
}

themebutton.addEventListener("click", () => {
  if(html.classList.contains("light")) {
    html.classList.replace("light", "dark");
    icon.src = "../imgs/dark-mode.svg";
    localStorage.setItem("theme", "dark");
    
  } else {
    html.classList.replace("dark", "light");
    icon.src = "../imgs/light-mode.svg"
    localStorage.setItem("theme", "light");
    
  }
})

