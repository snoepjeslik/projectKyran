var dropdownMenuContainer = document.createElement('div');
parentContainer.appendChild(dropdownMenuContainer);
dropdownMenuContainer.style.cssText = 'display: flex; margin-top: 7%; justify-content: flex-start; flex-direction: column; overflow: auto;'; 
dropdownMenuContainer.style.width = '20%';

var dropdownMenu = document.createElement('div');
dropdownMenuContainer.appendChild(dropdownMenu);
dropdownMenu.style.cssText = '';
dropdownMenu.style.width = '150px';
dropdownMenu.style.height = '50px';
dropdownMenu.textContent = 'this is a dropdown';

var itemsContainer = document.createElement('div');
parentContainer.appendChild(itemsContainer);
itemsContainer.style.cssText = 'display: flex; margin-top: 7%; justify-content: flex-start; flex-direction: column; overflow: auto;'; 



var koelkast = {
    name: 'koelkast',
    timeOnHours: '6',
    wattusage: '50'
};
var vriezer = {
    name: 'vriezer',
    timeOnHours: '6',
    wattusage: '50'
};
var koelkastMetVriezer = {
    name: 'koelkast met vriezer',
    timeOnHours: '6',
    wattusage: '75'
};


var optionsList = {
    vriezer,
    koelkast,
    koelkastMetVriezer
};



class Options {
    constructor(dropdownMenuOptionsContainer, optionsList) {
        for (var x = Object.keys(optionsList).length; x > 0; x--) {
            this.domElem = document.createElement('div');
            dropdownMenuOptionsContainer.appendChild(this.domElem);
            this.domElem.style.cssText = 'height: 50px; width: 150px; background-color: red; border-style: solid;';
            var item = optionsList[Object.keys(optionsList)[x - 1]];
            this.domElem.textContent = item.name;

            if (x == 1) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 1);
                };
            };
            if (x == 2) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 2);
                };
            };
            if (x == 3) {
                this.domElem.onmousedown = function e() {
                    objectClicked(optionsList, 3);
                };
            };
        };
    };
};




dropdownMenu.onmouseenter = function e() {
    onHoverEnter(optionsList)
};

function onHoverEnter(optionsList) {
    var dropdownMenuOptionsContainer = document.createElement('div');
    dropdownMenu.appendChild(dropdownMenuOptionsContainer);
    var dropdownMenuOptions = new Options(dropdownMenuOptionsContainer, optionsList);
    dropdownMenu.onmouseleave = function e() {
        onHoverLeave(dropdownMenuOptionsContainer)
    };
};

function onHoverLeave(dropdownMenuOptionsContainer) {
    console.log('leave');
    dropdownMenuOptionsContainer.remove();
};


function objectClicked(optionsList, x) {
    console.log(optionsList, x);
    var item = optionsList[Object.keys(optionsList)[x - 1]];
    var domElemContainer = document.createElement('div');
    itemsContainer.appendChild(domElemContainer);
    domElemContainer.textContent = item.name;
    domElemContainer.style.cssText = 'display: flex; align-items: center; margin-bottom: 5%;';

    
    var domInputWatt = document.createElement('INPUT');
    domInputWatt.setAttribute("value", item.wattusage);
    domElemContainer.appendChild(domInputWatt);

    var domInputTime = document.createElement('INPUT');
    domInputTime.setAttribute("value", item.timeOnHours);
    domElemContainer.appendChild(domInputTime);

    var domInputPrice = document.createElement('INPUT');
    domInputPrice.setAttribute("value", "Price you pay per kWu.");
    domElemContainer.appendChild(domInputPrice);
    
    var domButton = document.createElement('div');
    domElemContainer.appendChild(domButton);
    domButton.style.height = '20px';
    domButton.style.width = '20px';
    domButton.style.backgroundColor = 'red';

    var domElemkWu = document.createElement('div');
    domElemContainer.appendChild(domElemkWu);
    
    var domElemPrice = document.createElement('div');
    domElemContainer.appendChild(domElemPrice);


    domButton.onmousedown = function e() {getInputBoxValue(domElemkWu, domElemPrice, domInputWatt, domInputTime, domInputPrice)};
};


function getInputBoxValue(domElemkWu, domElemPrice, domInputWatt, domInputTime, domInputPrice) {
    var kWuUse = domInputWatt.value * domInputTime.value / 1000;
    var price = domInputPrice.value * kWuUse * 365;
    domElemkWu.textContent = 'this is the use in kWu per day: ' + kWuUse;
    domElemPrice.textContent = 'this is the amount you pay for it per year: $' + price;
};
