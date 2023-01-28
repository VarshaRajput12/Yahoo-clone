// signin =============

// const next = document.querySelector("#next");
// const input = document.querySelector("#input");

// next.addEventListener("click", (e) => {
//     if (input.value == ""){
//         alert("email is no valid")
//     } else{

//         window.location.href = "/pages/home.html";
//     }
// });
document.querySelector("#next").addEventListener("click", signin);

async function signin(e){
    e.preventDefault();
     const email = document.querySelector("#input").value;
     const signinpass = document.querySelector("#signinpass").value;
     try{
        const response = await fetch("https://aircampushack.onrender.com/gmail/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email,
                signinpass
            })
        });
        const data = await response.json();
        console.log(data)
        if(data.user !== "undefined"){
            window.location.href = "/pages/home.html"
        }
     }catch(err){
        console.log("Error", err)
     }
}