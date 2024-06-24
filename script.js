function totalBeforeTax(){
    let itemprice = 5700.88;
    let shipping = 1230.89;
    let sum = itemprice + shipping;
    document.querySelector(".before-tax").innerHTML =sum;
    let aftertax = (sum) *  0.1;
     let result = Math.round(aftertax);
    document.querySelector(".tax").innerHTML = result;
    let tax = result + sum;
    document.querySelector('.total').innerHTML = tax;
}
totalBeforeTax();
function hidecart(){
    const cart = document.querySelector(".summary");
    cart.style.display = "none";
}
function showcart(){
    const cart = document.querySelector(".summary");
    cart.style.display = "block";
}
function calculate(){
    let quantity = document.querySelector(".quantity").value;
    let amount = document.querySelector(".amount").value;
    let totalsum = amount * quantity ;
    document.querySelector(".totalsum").innerHTML = `ksh${totalsum}`;
    let shippingcost = document.querySelector(".shippingcost").value;
    document.querySelector(".ship").innerHTML = `ksh${shippingcost}`;
    befortax = totalsum;
    document.querySelector(".before-tax").innerHTML = `ksh${befortax}`;
    

    
}
