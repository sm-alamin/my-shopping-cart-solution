function getIphone12ValueById(isIncrease){
    const getIphone12Input = document.getElementById('input-field-12');
    const getIphone12String = getIphone12Input.value;
    const getIphone12PreviousValue = parseInt(getIphone12String);
    let newIphone12Value;
    if(isIncrease === true){
        newIphone12Value = getIphone12PreviousValue + 1;
    }else{
        newIphone12Value = getIphone12PreviousValue - 1;
    }
    getIphone12Input.value = newIphone12Value;
    return newIphone12Value;
}
function updateIphone12Total(newIphone12Value){
    const newIphone12Total = newIphone12Value * 1200;
    const newIphone12TotalElement = document.getElementById('iphone12-total');
    newIphone12TotalElement.innerText = newIphone12Total;

    return newIphone12Total;
}
document.getElementById('iphone12-plus').addEventListener('click', function(){
    const newIphone12Value =getIphone12ValueById(true);
    updateIphoneTotal= updateIphone12Total(newIphone12Value);
    subTotal();
})
document.getElementById('iphone12-minus').addEventListener('click', function(){
    const newIphone12Value =getIphone12ValueById(false);
    updateIphoneTotal= updateIphone12Total(newIphone12Value);
    subTotal();
})