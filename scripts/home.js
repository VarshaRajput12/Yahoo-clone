// for side bar =================
const less = document.querySelector("#less");
const more = document.querySelector("#more");
const moreOptions = document.querySelector(".items2");
const hide = document.querySelector("#hide");
const Folder_hide = document.querySelector("#Folder_hide");
const options = document.querySelector(".options");
const folder_options = document.querySelector(".folder_options");
const logoutBox = document.querySelector(".logout");
const profile = document.querySelector("#profile");

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
  if (hide.innerHTML == "Hide") {
    hide.innerHTML = "Show";
  } else {
    hide.innerHTML = "Hide";
  }
});

Folder_hide.addEventListener("click", (e) => {
  folder_options.classList.toggle("display");
  if (Folder_hide.innerHTML == "Hide") {
    Folder_hide.innerHTML = "Show";
  } else {
    Folder_hide.innerHTML = "Hide";
  }
});

profile.addEventListener("mouseover", () => {
  if (logoutBox.style.display == "none") {
    logoutBox.style.display = "block";
  } else {
    logoutBox.style.display = "none";
  }
});

window.addEventListener("click", (e) => {
  if (e.target !== logoutBox) {
    logoutBox.style.display = "none";
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

const mails_area = document.querySelector(".mails_area");
const compose_box = document.querySelector(".compose_box");
const composebtn = document.querySelector("#compose");
const cross_compose = document.querySelector("#cross_compose");

composebtn.addEventListener("click", () => {
  mails_area.style.display = "none";
  compose_box.style.display = "block";
});

cross_compose.addEventListener("click", () => {
  compose_box.style.display = "none";
  mails_area.style.display = "block";
});

const userEmail = new URL(window.location.href).searchParams.get("email");
// console.log(userEmail);

async function emailSend(e) {
  e.preventDefault();
  const senderEmail = document.querySelector("#send_to").value;
  const email = userEmail;
  const subject = document.querySelector("#Subject").value;
  const html = document.querySelector("#textarea").value;

  try {
    const response = await fetch(
      "https://aircampushack.onrender.com/gmail/sendemail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ senderEmail, email, subject, html }),
      }
    );
    const data = await response.json();
    console.log(data);
    console.log("email sent");
  } catch (err) {
    console.log("Error:", err);
  }
}

document.querySelector("#form2").addEventListener("submit", emailSend);

async function allData(e) {
  e.preventDefault();

  const email = userEmail;
  try {
    const response = await fetch(
      "https://aircampushack.onrender.com/gmail/listall",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
document.querySelector("#sent").addEventListener("click", allData);


const sentMails = document.querySelector(".sentMails");
const inbox = document.querySelector(".inbox");
document.querySelector("#sent").addEventListener("click", ()=>{
  mails_area.style.display = "none";
  compose_box.style.display = "none";
  sentMails.style.display = "block"
});

inbox.addEventListener("click",()=>{
  compose_box.style.display = "none";
  mails_area.style.display = "block";
  sentMails.style.display = "none";
})

// const Deletebtn = document.querySelectorAll(".trash");
// const date = document.querySelectorAll(".date");
// const mail_section = document.querySelectorAll(".mail_section");


// mail_section.forEach((section)=>{
//   section.addEventListener("mouseover", ()=>{
//     date.forEach((ele) => {
//       ele.classList.toggle("display");
//     });
//   })
// })

// mail_section.forEach((section) => {
//   section.addEventListener("mouseover", () => {
//     Deletebtn.forEach((ele2) => {
//       ele2.classList.toggle("display");
//     });
//   });
// });



