import './index.css';
import logo from './media/sensei.png';
import 'babel-polyfill';
// const numeral = require('numeral');
const getUser = require('./api/usersapi');
import indexapi from './indexapi';


// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`I would pay ${courseValue}`); //eslint-disable-line no-console

const fetchUser = () => {
  const ulElement = document.querySelector("#names");
  getUser().then( (data) => {
    data.every( (item) => {
      indexapi.addListItem(ulElement, item);
      return true;
    })
  }).catch( (error) => {
    console.log(error); //eslint-disable-line no-console
  })
}

const addImage = () => {
  document.querySelector(".logo").src = logo;
}

fetchUser();
addImage();
