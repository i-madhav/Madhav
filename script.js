const nameInput = document.querySelector(".Name");
const emailInput = document.querySelector(".Email");
const submitButton = document.querySelector("#submitButton");


submitButton.addEventListener("click" , ()=>{

    const name = nameInput.value;
    const email = emailInput.value;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if(!name || !email){
    return alert("Field is empty")
   }else if(!email.match(emailRegex)){
        return alert("Email Format is Wrong")
   }

    const userData = {
        name:name,
        email:email
    }

    console.log(userData);

    nameInput.value = "";
    emailInput.value = "";
})