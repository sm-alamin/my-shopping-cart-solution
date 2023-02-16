function getIphone13ValueById(isIncrease){
    const getIphone13Input = document.getElementById('input-field-13');
    const getIphone13String = getIphone13Input.value;
    const getIphone13PreviousValue = parseInt(getIphone13String);
    let newIphone13Value;
    if(isIncrease === true){
        newIphone13Value = getIphone13PreviousValue + 1;
    }else{
        newIphone13Value = getIphone13PreviousValue - 1;
    }
    getIphone13Input.value = newIphone13Value;
    return newIphone13Value;
}
function updateIphone13Total(newIphone13Value){
    const newIphone13Total = newIphone13Value * 1300;
    const newIphone13TotalElement = document.getElementById('iphone13-total');
    newIphone13TotalElement.innerText = newIphone13Total;

    return newIphone13Total;
}
document.getElementById('iphone13-plus').addEventListener('click', function(){
    const newIphone13Value =getIphone13ValueById(true);
    updateIphoneTotal= updateIphone13Total(newIphone13Value);
    subTotal();
})
document.getElementById('iphone13-minus').addEventListener('click', function(){
    const newIphone13Value =getIphone13ValueById(false);
    updateIphoneTotal= updateIphone13Total(newIphone13Value);
    subTotal();
})