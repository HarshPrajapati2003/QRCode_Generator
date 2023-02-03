let qr_code= document.querySelector("#QR-Code");
let qr_img= document.querySelector("#code-img");
let loader = document.querySelector("#loading");

let check = document.getElementById('input').value;
console.log(check);
qr_code.addEventListener("click",()=>{
    // console.log(check);
    if(check==""){
        qr_img.style.display="none";
        alert("Please enter url");
    }
    else{
    loader.style.display="block";
    
    qr_img.onload = function(){
        loader.style.display = "none";
    }

    let input = document.querySelector("#input").ariaValueMax;
    let api ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input;
    qr_img.src=api;
    }
})