import _ from 'lodash';
import style from "./index.scss";
import "./clearButton"
import logo from './assets/christmas_logo.png'

const ul = document.createElement('ul');
list.appendChild(ul);

const el = document.getElementById("header");
const btn1 = document.getElementById("btn-1");
const logoEl = document.getElementById("logo");

el.classList.add([style.header]);

btn1.classList.add([style.button]);
btn1.addEventListener('click', () => {
    const listItems = ['css-loader', 'sass-loader', 'style-loader', 'node-loader', 'stylus-loader'];
    _.forEach(listItems, (item) => {
        const tempEl = document.createElement('li');
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});

logoEl.src = logo;