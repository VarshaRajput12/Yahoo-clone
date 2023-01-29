

//for sign up========================

const form = document.querySelector("form");
const continuebtn = document.querySelector("#continue");
const Name = document.querySelector("#name").value;

// console.log(form)
continuebtn.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#password").value;

  // if (email === "" || pass === "" || Name === "") {
  //   alert("Fill the empty fields");
  //   return;
  // }
  try {
    const response = await fetch(
      "https://aircampushack.onrender.com/gmail/signup",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          pass,
        }),
      }
    );
    
    const data = await response.json();
    console.log(data);
    if (data.user !== "undefined") {
      window.location.href = "../index.html";
    }
  } catch (err) {
    console.log(err);
  }
}
