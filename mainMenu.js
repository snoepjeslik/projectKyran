
var menuContainer = document.createElement('div');
parentContainer.appendChild(menuContainer);
menuContainer.style.cssText = 'display: flex; justify-content: flex-start; align-items: center; position: fixed;';
menuContainer.style.height = '10%';
menuContainer.style.width = '100%'; 
menuContainer.style.backgroundColor = 'white';
menuContainer.style.boxShadow = 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px';



class Menu {
    constructor(textContent, url) {
        this.domElem = document.createElement('div');
        menuContainer.appendChild(this.domElem);
        this.domElem.style.cssText = 'display: flex; justify-content: center; align-items: center; font-size: 15px; padding-left: 1%; padding-right: 1%; border-radius: 10%;';
        this.domElem.style.minWidth = '5%';
        this.domElem.style.height = '80%';
        this.domElem.textContent = textContent;
        this.domElem.onmouseenter = function e() {startHover(this)};
        this.domElem.onmouseleave = function e() {endHover(this)};
        this.domElem.onmousedown = function e() {openNewPage(url)};
    };
};

var menuElementMenu = new Menu('Menu');
var menuElementDiscription = new Menu('Over', 'over.html');
var menuElementkWu = new Menu('Energie/kWu', 'energie.html');
var menuElementGas = new Menu('Gas', 'gas.html'); 
var menuElementMoney = new Menu('Besparing', 'besparen.html');
var menuElementHome = new Menu('Home', 'index.html')


function openElementmenuTab() {
    window.open('menuElementMenu.html', '_self');
};


function startHover(element) {
    element.style.backgroundColor = 'rgba(175, 105, 216, 0.60)';
    element.style.transitionDuration = '500ms';

};


function endHover(element) {
    element.style.backgroundColor = 'white';
    element.style.transitionDuration = '500ms';
};

function openNewPage(url) {
    window.open(url, '_self');
};