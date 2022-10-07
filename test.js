var dropdownMenuContainer = document.createElement('div');
parentContainer.appendChild(dropdownMenuContainer);
dropdownMenuContainer.style.cssText = 'display: flex; justify-content: center; align-items: center;';
dropdownMenuContainer.style.width = '100%';

var dropdownMenu = document.createElement('div');
dropdownMenuContainer.appendChild(dropdownMenu);
dropdownMenu.style.cssText = '';
dropdownMenu.style.width = '150px';
dropdownMenu.style.height = '50px';
dropdownMenu.textContent = 'this is a dropdown';




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
    var item = optionsList[Object.keys(optionsList)[x-1]]; 
    var domElem = document.createElement('div');
    parentContainer.appendChild(domElem);
    domElem.textContent = item.name;
    domElem.style.cssText = 'display: flex; align-items: center;';

    console.log(item.timeOnHours * item.wattusage / 1000 * 0.81);
};