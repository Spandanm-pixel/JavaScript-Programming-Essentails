let grc1;
let grc2;
let grc3;

function grocerySum(){
    grc1=parseFloat(document.getElementById('grc1').value);
    grc2=parseFloat(document.getElementById('grc2').value);
    grc3=parseFloat(document.getElementById('grc3').value);

    total=grc1+grc2+grc3;

    document.getElementById('result').innerText=`The total amount is: ₹ ${total}`;
}