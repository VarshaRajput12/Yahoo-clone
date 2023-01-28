// for side bar =================
const less = document.querySelector("#less");
const more = document.querySelector("#more");
const moreOptions = document.querySelector(".items2");
const hide = document.querySelector("#hide");
const Folder_hide = document.querySelector("#Folder_hide");
const options = document.querySelector(".options");
const folder_options = document.querySelector(".folder_options");

more.addEventListener("click", () => {
  moreOptions.style.display = "block";
  more.style.display = "none";
});

less.addEventListener("click", () => {
  moreOptions.style.display = "none";
  more.style.display = "block";
});

hide.addEventListener("click", (e) => {
  options.classList.toggle("display");
  if ((hide.innerHTML == "Hide")) {
    hide.innerHTML = "Show";
  } else {
    hide.innerHTML = "Hide";
  }
});

Folder_hide.addEventListener("click", (e) => {
  folder_options.classList.toggle("display");
  if ((Folder_hide.innerHTML == "Hide")) {
    Folder_hide.innerHTML = "Show";
  } else {
    Folder_hide.innerHTML = "Hide";
  }
});


//mails section

// const Delete = document.querySelectorAll(".Delete");
// const mail_section = document.querySelectorAll(".mail_section");
// console.log(mail_section);
// mail_section.addEventListener("click", (e)=>{
//     Delete.forEach((ele)=>{
//         console.log(ele)
//     })
// })