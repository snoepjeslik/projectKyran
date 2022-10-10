document.body.style.cssText = 'padding: 0px; margin: 0px; overflow-x: hidden;';

var parentContainer = document.createElement('div'); 
document.body.appendChild(parentContainer);
parentContainer.style.cssText = 'display: flex;';
parentContainer.style.height = window.innerHeight + 'px';
parentContainer.style.width = window.innerWidth + 'px';
parentContainer.style.backgroundColor = 'white';

