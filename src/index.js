import _ from 'lodash';

import './style.css';
import batTop from './batTop.jpg';

function component() {
    const element = document.createElement('div');
    // Lodash é utilizado como variável global por meio da
    //declaração do <script> no index.html
    
    element.innerHTML = _.join(['Welcome to BatTOP'], ' ');
    element.classList.add('hello');

    var image = document.createElement('img');
    image.src = batTop;
    // image.height = 200;
    element.appendChild(image);

    return element;
}

document.body.appendChild(component());