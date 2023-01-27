
// for side bar =================
const less = document.querySelector("#less");
const more = document.querySelector("#more");
const moreOptions = document.querySelector(".items2");
const hide = document.querySelector("#hide");
const Folder_hide = document.querySelector("#Folder_hide");
const options = document.querySelector(".options");
const folder_options = document.querySelector(".folder_options");

more.addEventListener("click", ()=>{
    moreOptions.style.display = "block";
    more.style.display = "none";
});

less.addEventListener("click", ()=>{
    moreOptions.style.display = "none";
    more.style.display = "block";
})

hide.addEventListener("click", (e) => {
 options.classList.toggle("display");
  
});

Folder_hide.addEventListener("click", (e) => {
  folder_options.classList.toggle("display");
});