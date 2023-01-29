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
     const pass = document.querySelector("#signinpass").value;
     if(email === "" || pass ===""){
        alert("fill the empty fields")
        return;
     }
     try{
        const response = await fetch("https://aircampushack.onrender.com/gmail/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email,
                pass
            })
        });
        const data = await response.json();
        console.log(data)
        if(data.user !== undefined){
            window.location.href = "../pages/home.html?email=" + email;
        }else{
            console.log("Error:", data.message);
            alert("user doesn't exist");
            // window.location.href = "../pages/signup.html";
        }
     }catch(err){
        
        console.log("Error", err)
     }
}