const peoplename = document.getElementById("peoplename");
let numPeople = 0;
let personvalue = document.getElementById("price_person");
let peoplesize = document.getElementById("peoplesize");

function addName(){
    if(typename.value != ""){
        numPeople++;
        peoplesize.innerText = numPeople;
        MyNumberType();
        const nameItem = document.createElement("li");
        let name = typename.oninput;
        nameItem.innerHTML = typename.value;
        peoplename.appendChild(nameItem);
        typename.value = "";
    }
}

function MyNumberType() {
    var total_price = parseInt(document.getElementById("total_price").value);
    if (numPeople != 0 && total_price>0) {
        var personPrice = total_price/numPeople;
        personvalue.innerText = personPrice;
    } else {
        personvalue.innerText = 0;
    }
}

function ResetButton() {
    peoplesize.innerText = 0;
    var total_price = parseInt(document.getElementById("total_price").value);
    total_price.innerText = 0;
}
