let elem = document.getElementsByClassName("container");
elem[0].innerHTML = "Hello World";
elem[0].style.backgroundColor = "orange";
elem[0].style.textAlign = "center";
elem[0].style.height = "400px";








 let newInp = document.createElement("input");
 newInp.className = "form-control mt-3";
 elem[0].appendChild(newInp);

 newInp.addEventListener("keyup" , myFunc);
    function myFunc(){
        console.log("funtion implement on input field");
    }


let newBtn = document.createElement("button");

elem[0].appendChild(newBtn);
newBtn.innerHTML="cilck here";
newBtn.className = "btn btn-dark mt-5";
newBtn.style.display="block";
newBtn.style.fontSize="24px";
newBtn.style.letterSpacing="14px";
newBtn.style.margin="0px auto";

newBtn.addEventListener("click" , pencil)
    function pencil(){
        console.log("The Button Is Clicked");
        newBtn.textContent="WOW";
        newInp.value ="";
    }