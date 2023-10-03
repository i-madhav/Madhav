const nameInput = document.querySelector(".Name");
const emailInput = document.querySelector(".Email");
const submitButton = document.querySelector("#submitButton");


submitButton.addEventListener("click" , ()=>{

    const name = nameInput.value;
    const email = emailInput.value;

   if(!name || !email) return alert("Field is Empty");

    const userData = {
        name:name,
        email:email
    }

    console.log(userData);

    nameInput.value = "";
    emailInput.value = "";
})