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

const mails_area = document.querySelector(".mails_area");
const compose_box = document.querySelector(".compose_box");
const composebtn = document.querySelector("#compose");
const cross_compose = document.querySelector("#cross_compose");

composebtn.addEventListener("click", () => {
  mails_area.style.display = "none";
  sentMails.style.display = "none";
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
  let email = document.querySelector("#send_to").value;
  let senderEmail = userEmail;
  let subject = document.querySelector("#Subject").value;
  let html = document.querySelector("#textarea").value;
  compose_box.style.display = "none";
  try {
    const response = await fetch(
      "https://aircampushack.onrender.com/gmail/sendemail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senderEmail, subject, html }),
      }
    );
    const data = await response.json();
    console.log(data);
    // alert("Mail sent Successfully");
    document.querySelector("#sentArea_").style.display = "block";
  } catch (err) {
    console.log("Error:", err);
  }
  email = "";
  subject = "";
  html = "";

}

document.querySelector("#form2").addEventListener("submit", emailSend);

const sentMails = document.querySelector(".sentMails");
const inbox = document.querySelector(".inbox");
const sentBtn = document.querySelector("#sent")

inbox.addEventListener("click", () => {
  compose_box.style.display = "none";
  mails_area.style.display = "block";
  sentMails.style.display = "none";
  inbox.classList.toggle("background");
  sentBtn.classList.remove("background");
});

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

const allData = async (e) => {
  e.preventDefault();

  mails_area.style.display = "none";
  compose_box.style.display = "none";
  sentMails.style.display = "block";
  sentBtn.classList.add("background");
  inbox.classList.remove("background");

  let email = userEmail;

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

    let emailData = data.emailData[0].emailData;
    let emails = [];

    try {
      emailData = JSON.parse(emailData);
    } catch (e) {
      console.error("Invalid JSON string:", emailData);
      return;
    }

    emailData.forEach((data) => {
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (e) {
          console.error("Invalid JSON string:", data);
          return;
        }
      }
      emails.push(data);
    });

    const emailTemplate = emails
      .map((email) => {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        let ampm = "AM";
        if (hours >= 12) {
          ampm = "PM";
        }
        const currentHour = hours % 12 || 12;
        const currentMinute = currentTime.getMinutes();
        return `
        <div class="mail_section">
                <div class="left">
                  <input type="checkbox" />
                  <span>${email.email}</span>
                </div>
                <div class="mid">
                  <i class="fa-regular fa-star"></i>
                  <span>${email.subject}</span>
                </div>
                <div class="time">
                  <i class="fa-solid fa-trash-can display"></i>
                  <span class="date">${currentHour} : ${currentMinute} : ${ampm}</span>
                </div>
              </div>
  `;
      })
      .join("");
    document.querySelector("#sentArea_").innerHTML = emailTemplate;
    
  } catch (error) {
    console.log("Error:", error);
  }
};

sentBtn.addEventListener("click", allData);
