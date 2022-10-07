var mainPageContainer = document.createElement('div'); 
parentContainer.appendChild(mainPageContainer);
mainPageContainer.style.cssText = 'position: absolute; display: flex;';
mainPageContainer.style.height = '100%';
mainPageContainer.style.width = '100%'; 
mainPageContainer.style.backgroundColor = 'white';

class MainPageElement{
    constructor(width, height) {
        this.domElem = document.createElement('div');
        mainPageContainer.appendChild(this.domElem);
        this.domElem.style.marginRight = '5%';
        this.domElem.style.padding = '1%';
        this.domElem.style.position = 'relative';
        this.domElem.style.marginTop = '5%';
        this.domElem.style.height = height;
        this.domElem.style.width = width;
        this.domElem.style.backgroundColor = 'white';
        this.domElem.style.boxShadow = '0px 3px 15px rgba(0,0,0,0.2)';
        this.domElem.style.overflowY = 'scroll';
        this.domElem.style.overflowX = 'hidden';
    };

    pageTitle(text) {
        makeTitle(this.domElem, text);
    };

    pageText(text){
        makeText(this.domElem, text);
    };

    pageImg(adresImg) {
        makeImg(this.domElem, adresImg);
    };
};

var mainPageTips = new MainPageElement('20%', '');
var mainPageDiscription = new MainPageElement('100%', '');

mainPageDiscription.pageTitle(text = ['Hoeveel energie gebruikt jij!?']);
mainPageDiscription.pageText(text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et neque dictum, fermentum quam ac, bibendum mauris. Integer vulputate metus sit amet felis consequat semper. Nulla facilisi. Aenean pharetra porttitor mollis. Nunc eget facilisis velit. Ut dignissim, enim ac semper faucibus, orci neque dapibus metus, quis egestas elit libero eget urna. Aenean eget ligula vel odio ornare consectetur. Vivamus interdum ante id facilisis imperdiet. Nullam non purus velit. Praesent vel neque ut mi bibendum ullamcorper et in lacus. Nam vitae egestas odio. Proin mauris mi, dictum sed porttitor tristique, malesuada eget nibh. Ut placerat tortor et commodo suscipit. Etiam sodales massa orci, ut pellentesque quam tempus at. Nam quis elit tempus, aliquam nunc eget, lacinia sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sagittis ornare dignissim. Ut dapibus quam massa, et laoreet lorem pellentesque id. Nulla suscipit libero et nunc gravida, eu tristique erat rutrum. Nulla sit amet finibus elit. Phasellus quam nisi, ornare at pulvinar id, molestie at nisi. Cras auctor fermentum luctus. Integer eu ultrices nibh. Integer feugiat orci sed nisi dignissim sagittis. Vivamus risus magna, auctor in risus ac, pharetra vehicula leo. Mauris id porttitor eros. In dignissim tristique eleifend. Quisque et purus sed ligula dapibus interdum sed a neque. Pellentesque euismod nisi maximus pellentesque efficitur. Phasellus malesuada ut nisl eu tristique. In iaculis ullamcorper hendrerit. Quisque aliquam consectetur erat, non bibendum nisl pharetra vel. Vestibulum eu bibendum augue. Ut vel fermentum orci, eget malesuada urna. Quisque semper, nunc nec commodo sagittis, ex orci interdum enim, in congue odio purus vehicula enim. Praesent viverra efficitur nisi et rhoncus.']);
mainPageDiscription.pageImg(adresImg = ['https://www.raamfolieonline.nl//Files/10/181000/181374/ProductPhotos/Source/1800663381.jpg']);


mainPageTips.pageTitle(text = ['Energie tips!'])
mainPageTips.pageText(text = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et neque dictum, fermentum quam ac, bibendum mauris. Integer vulputate metus sit amet felis consequat semper. Nulla facilisi. Aenean pharetra porttitor mollis. Nunc eget facilisis velit. Ut dignissim, enim ac semper faucibus, orci neque dapibus metus, quis egestas elit libero eget urna. Aenean eget ligula vel odio ornare consectetur. Vivamus interdum ante id facilisis imperdiet. Nullam non purus velit. Praesent vel neque ut mi bibendum ullamcorper et in lacus. Nam vitae egestas odio. Proin mauris mi, dictum sed porttitor tristique, malesuada eget nibh. Ut placerat tortor et commodo suscipit. Etiam sodales massa orci, ut pellentesque quam tempus at. Nam quis elit tempus, aliquam nunc eget, lacinia sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sagittis ornare dignissim. Ut dapibus quam massa, et laoreet lorem pellentesque id. Nulla suscipit libero et nunc gravida, eu tristique erat rutrum. Nulla sit amet finibus elit. Phasellus quam nisi, ornare at pulvinar id, molestie at nisi. Cras auctor fermentum luctus. Integer eu ultrices nibh. Integer feugiat orci sed nisi dignissim sagittis. Vivamus risus magna, auctor in risus ac, pharetra vehicula leo. Mauris id porttitor eros. In dignissim tristique eleifend. Quisque et purus sed ligula dapibus interdum sed a neque. Pellentesque euismod nisi maximus pellentesque efficitur. Phasellus malesuada ut nisl eu tristique. In iaculis ullamcorper hendrerit. Quisque aliquam consectetur erat, non bibendum nisl pharetra vel. Vestibulum eu bibendum augue. Ut vel fermentum orci, eget malesuada urna. Quisque semper, nunc nec commodo sagittis, ex orci interdum enim, in congue odio purus vehicula enim. Praesent viverra efficitur nisi et rhoncus.'])





function makeTitle(titleContainer, text) {
    var domElem = document.createElement('div');
    titleContainer.appendChild(domElem);
    domElem.style.cssText = '';
    domElem.style.fontSize = '30px';
    domElem.style.position = '';
    domElem.textContent = text;
};

function makeText(titleContainer, text) {
    var domElem = document.createElement('div');
    titleContainer.appendChild(domElem);
    domElem.style.cssText = '';
    domElem.style.fontSize = '15px';
    domElem.style.position = '';
    domElem.textContent = text;
};

function makeImg(titleContainer, adresImg) {
    var domElem = document.createElement('img');
    titleContainer.appendChild(domElem);
    domElem.src = adresImg;
    domElem.style.width = '250px';
};
