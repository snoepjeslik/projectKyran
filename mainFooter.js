var mainPageFooterContainer = document.createElement('div');
parentContainer.appendChild(mainPageFooterContainer);
mainPageFooterContainer.style.cssText = 'display: flex; align-items: center; justify-content: space-around;'; 
mainPageFooterContainer.style.width = '100%';
mainPageFooterContainer.style.height = '35%';
mainPageFooterContainer.style.backgroundColor = 'rgba(14, 20, 27, 1)';
mainPageFooterContainer.style.position = 'absolute';
mainPageFooterContainer.style.left = '0';
mainPageFooterContainer.style.bottom = '-40%';

class FooterContainerElement {
    constructor(){
        this.domElem = document.createElement('div');
        mainPageFooterContainer.appendChild(this.domElem);
        this.domElem.style.cssText = 'display: flex; flex-direction: column; justify-content: space-evenly;'
        this.domElem.style.width = '15%';
        this.domElem.style.height = '80%';
    };

    footerElement(x, text) {
        for(x => 0; x--;) {
            makeFooterElement(this.domElem, x, text);
        };
    };
};




var footerProducts = new FooterContainerElement();
var footerCompony = new FooterContainerElement();
var footerSponsers = new FooterContainerElement();

footerProducts.footerElement(5, text = ['over', 'bedrijven', 'sponserd', 'appels', 'Products']);
footerCompony.footerElement(5, text = ['over', 'bedrijven', 'sponserd', 'wortel', 'Compony']);
footerSponsers.footerElement(5, text = ['over', 'bedrijven', 'sponserd', 'appelflap', 'Sponsers']);

function makeFooterElement(footerContainer, x, text) {
    var domElem = document.createElement('div');
    footerContainer.appendChild(domElem);
    domElem.style.cssText = ''
    domElem.style.height = '';
    domElem.style.width = '80%';
    domElem.style.color = 'white';
    domElem.textContent = text[x];
    if (x == 4) {
        domElem.style.fontSize = '30px';
    };
};