
const phone = document.querySelector("#phoneInput")
const phoneCheck = document.querySelector(".phoneCheck")
const phoneResult = document.querySelector(".phoneResult")


    const phoneRegExp = /^0|1\d{13}$/;
    
    phoneCheck.addEventListener("click",() =>{

        console.log(phoneInput.value);

    if(phoneRegExp.test(phoneInput.value)) {
        phoneResult.innerText = "Все верно!"
        phoneResult.style.color = "green"

    }else{
        phoneResult.innerText = "Неправильный ИНН!"
        phoneResult.style.color = "red"
    }
  });

