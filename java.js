const buttons=document.querySelectorAll("button");
const orderb= document.getElementById("Order");
buttons.forEach((button) =>{

    button.addEventListener("click", () => {
        orderb.classList.remove("hidden");
        
        setTimeout(() =>{


            orderb.classList.add("hidden");
        },4000);
        
        });   


});



 
 