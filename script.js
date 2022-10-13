const fm=document.querySelector("#sub");
const pw=document.querySelector('#pw');
const cpw=document.querySelector('#cpw');
const mssg=document.querySelector(".error-msg");

fm.addEventListener('click',e =>{
    
    if(pw!=cpw){
        pw.classList.add('error');
        cpw.classList.add('error');
        mssg.textContent="Password not matched";

    }
    e.preventDefault();
})