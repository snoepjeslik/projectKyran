var energiePageContainer = document.createElement('div');
parentContainer.appendChild(energiePageContainer);
energiePageContainer.style.cssText = 'position: absolute; display: flex; justify-content: space-evenly; align-items: center; flex-direction: column; margin-top: 5%;';
energiePageContainer.style.height = '100%';
energiePageContainer.style.width = '100%'; 
energiePageContainer.style.backgroundColor = 'white';

var dropdownMenu = document.createElement('div');
energiePageContainer.appendChild(dropdownMenu);
dropdownMenu.style.cssText = '';
dropdownMenu.style.width = '150px';
dropdownMenu.style.height = '20px';


class EnergiePageElement {
    constructor() {
        this.domElem = document.createElement('div');
        energiePageContainer.appendChild(this.domElem);
        this.domElem.style.cssText = 'display: flex; justify-content: flex-start; align-items: center;';    
        this.domElem.style.height = '10%';
        this.domElem.style.width = '80%';
        this.domElem.style.backgroundColor = 'white';
        disignBox(this.domElem);
        makeInputBox(this.domElem);
    };
};

var koelkast = new EnergiePageElement();
var friezer = new EnergiePageElement();
var washmachine = new EnergiePageElement();
var droger = new EnergiePageElement();  
var droger = new EnergiePageElement();  
var droger = new EnergiePageElement();  




function disignBox(container) {
    var domElem = document.createElement('div');
    container.appendChild(domElem);
    domElem.style.cssText = '';
    domElem.textContent = 'koelkast';
};

function makeInputBox(container) {
    var domInputWatt = document.createElement('INPUT');
    domInputWatt.setAttribute("value", "Enter Watt use.");
    container.appendChild(domInputWatt);

    var domInputTime = document.createElement('INPUT');
    domInputTime.setAttribute("value", "Enter time on.");
    container.appendChild(domInputTime);

    var domInputPrice = document.createElement('INPUT');
    domInputPrice.setAttribute("value", "Price you pay per kWu.");
    container.appendChild(domInputPrice);
    
    var domButton = document.createElement('div');
    container.appendChild(domButton);
    domButton.style.height = '20px';
    domButton.style.width = '20px';
    domButton.style.backgroundColor = 'red';

    var domElemkWu = document.createElement('div');
    container.appendChild(domElemkWu);
    
    var domElemPrice = document.createElement('div');
    container.appendChild(domElemPrice);


    domButton.onmousedown = function e() {getInputBoxValue(domElemkWu, domElemPrice, domInputWatt, domInputTime, domInputPrice)};
};

function getInputBoxValue(domElemkWu, domElemPrice, domInputWatt, domInputTime, domInputPrice) {
    var kWuUse = domInputWatt.value * domInputTime.value / 1000;
    var price = domInputPrice.value * kWuUse * 365;
    domElemkWu.textContent = 'this is the use in kWu per day: ' + kWuUse;
    domElemPrice.textContent = 'this is the amount you pay for it per year: $' + price;
};