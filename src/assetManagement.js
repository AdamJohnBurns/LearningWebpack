import TestImage from './img/test.png';
import dataJson from './data.json';
import dataXml from './data.xml';
import dataCsv from './data.csv';

import './css/assetManagement.css';

var myImg = document.getElementById('my-image');
myImg.src = TestImage;

console.log('Hello world!');
document.write(dataJson.myTest);
console.log(dataXml);
console.log(dataCsv);
