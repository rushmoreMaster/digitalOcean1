import HomeScreen from "./src/screens/HomeScreens.js";
import ProductScreen from "./src/screens/ProductScreen.js";
import { parseRequestUrl } from "./src/utils.js";

const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen
}

const router = async () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/') + (request.id ? '/:id': '') + (request.verb ? `${request.verb}`: '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

// var i = 0;
// var images = [];
// var time = 3000;

// images[0] = './images/slideimages/banner1.jpg';
// images[1] = './images/slideimages/banner2.jpg';
// images[2] = './images/slideimages/banner3.jpg';

// // change the image
// function changeImg(){
//     document.slide.src = images[i];

//     if(i < images.length -1){
//         i ++;
//     }else{
//         i = 0;
//     }

//     setTimeout("changeImg()", time);
// };

// window.onload = changeImg;