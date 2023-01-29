

//for sign up========================

const form = document.querySelector("form");
const continuebtn = document.querySelector("#continue");

// console.log(form)
continuebtn.addEventListener("click", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#password").value;

  
  try {
    if (email === "" || pass === "") {
      alert("email is no valid");
    }
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
      window.location.href = "../pages/signin.html";
    }
  } catch (err) {
    console.log(err);
  }
}
