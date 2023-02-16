function updatePhoneNumber(isIncrease){
    const getInputField = document.getElementById('input-field-11');
    const getInputFieldString = getInputField.value;
    const getInputFieldValue = parseInt(getInputFieldString);

    let newInput;
    if(isIncrease == true){
       newInput = getInputFieldValue + 1;
    }else{
        newInput = getInputFieldValue - 1;
    }
    getInputField.value = newInput;

    return newInput;
}

function updatePhoneTotal(newInputValue){
    const totalIphonePrice = newInputValue * 1000;
    const totalPriceElement = document.getElementById('iphone11-total');
    totalPriceElement.innerText = totalIphonePrice;
}
document.getElementById('iphone11-plus').addEventListener('click', function(){
    const newInputValue = updatePhoneNumber(true);
    updatePhoneTotal(newInputValue);
    subTotal();
    
})
document.getElementById('iphone11-minus').addEventListener('click', function(){
    const newInputValue = updatePhoneNumber(false);
    updatePhoneTotal(newInputValue);
    subTotal();
})