function textElementById(elementId){
    const getIphoneTotalElement = document.getElementById(elementId);
    const getIphoneTotalString = getIphoneTotalElement.innerText;
    const getIphoneTotalValue = parseInt(getIphoneTotalString);

    return getIphoneTotalValue;
}
function subTotal(){
    const iphone11CurrentTotal = textElementById('iphone11-total');
    const iphone12CurrentTotal = textElementById('iphone12-total');
    const iphone13CurrentTotal = textElementById('iphone13-total');

    const subTotal = iphone11CurrentTotal + iphone12CurrentTotal + iphone13CurrentTotal;
    
    const subTotalElement = document.getElementById('subTotal');
    const totalElement = document.getElementById('total');
    const totalTaxElement = document.getElementById('tax');
    subTotalElement.innerText = subTotal;
    const taxTotal = subTotal * .10;
    totalTaxElement.innerText = taxTotal;
    const netTotal = subTotal * 1.10;
    totalElement.innerText = netTotal.toFixed(2);
    return subTotal;
}


document.getElementById('coupon-apply').addEventListener('click', function(){
    const getCouponELement = document.getElementById('coupon');
    const getCoupon = getCouponELement.value;
    
    let message = document.getElementById('success-message');
    let message2 = document.getElementById('failed-message');
    const totalElement = document.getElementById('total');
    const totalDiscount = document.getElementById('discount');
    const totalTax = document.getElementById('tax');
    if(getCoupon == 'DISC30'){
        message.style.display = 'block';
        message2.style.display = 'hidden';
    
        const subTotalValue = subTotal();
        //Discount
        const discount = subTotalValue * .30;
        totalDiscount.innerText = discount;
        //sales tax
        const salesTax = subTotalValue * .10;
        //Total
        const total = (subTotalValue - discount) + salesTax;
        totalElement.innerText = total;
        //net total
        
    }else{
        message.style.display = 'hidden';
        message2.style.display = 'block';
    }
})