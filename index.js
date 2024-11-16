document.getElementById("coupon-input")
  .addEventListener("keyup", function (event) {
    const getInput = event.target.value;
    const btnApply = document.getElementById("btn-apply");
    const estimatedPrice = document.getElementById("estimated-price").innerText;
    if (getInput === "SELL200" && estimatedPrice >= 200) {
      btnApply.removeAttribute;
    
     
    }
      else{
      btnApply.setAttribute( true);
    }
    
  });
  function getDiscountPrice(){
    const estimatedPrice = document.getElementById("estimated-price").innerText;
    const  discountPrice1 = estimatedPrice * 0.2;
    const discountPrice=parseFloat(discountPrice1);
  
    return discountPrice;
  }
 
document.getElementById("btn-apply").addEventListener("click", function () {
 const discount =getDiscountPrice()
 const btnApply = document.getElementById("btn-apply");
  const showdiscount= document.getElementById("discount-price");
  showdiscount.innerText = discount.toFixed(2) ;
  const totalpricestring= document.getElementById('total-price');
const totalprice =parseFloat(totalpricestring.innerText).toFixed(2);
const totalPriceAmount=totalprice -discount.toFixed(2);
totalpricestring.innerText=totalPriceAmount.toFixed(2);
const couponInput=document.getElementById('coupon-input');
couponInput.value= ' '

btnApply.setAttribute("disabled", true);


  
});

function cardsOnclick(elementTitle,taka) {
    const x=elementTitle;
  const y=parseFloat(taka);
  const itemName = x +' -'+' ' +y+'tk' ; 
  const li = document.createElement("li");
  li.innerText = itemName;
  const newLi = document.getElementsByClassName("list-decimal")[0];
  newLi.appendChild(li).classList.add("py-1", "text-xl", "text-bold");


  const estimatedPriceCheck=document.getElementById('estimated-price')
const estimatedPrice=estimatedPriceCheck.innerText;

const totalEstimatedPrice= parseFloat(estimatedPrice) + y;
estimatedPriceCheck.innerText=totalEstimatedPrice;

const makePurchase=document.getElementById('make-purchase');
const showdiscount= document.getElementById("discount-price").innerText;
if(totalEstimatedPrice>0){
  makePurchase.removeAttribute('disabled');
  const totalPriceCheck=document.getElementById('total-price');


const totalPriceAmount= totalEstimatedPrice;
totalPriceCheck.innerText=totalPriceAmount;


}else {
  btnApply.setAttribute("disabled", true);
}

}
document.getElementById('go-home').addEventListener('click',function(){

  const p=document.getElementById('total-price');
  p.innerHTML ='00';
  const q =document.getElementById('estimated-price');
   q.innerHTML ='00';
  const r =document.getElementById('discount-price');
 r.innerText='00'


const couponInput=document.getElementById('coupon-input');
couponInput.value='';

const x =document.getElementById('make-purchase');
x.setAttribute("disabled", true);
location.reload();

})