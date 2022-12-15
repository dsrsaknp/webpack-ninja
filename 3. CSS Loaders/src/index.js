import _ from 'lodash';
import "./styles.css";
import "./clearButton"

const ul = document.createElement('ul');
list.appendChild(ul);

const btn1 = document.getElementById("btn-1");

btn1.classList.add(["button"]);
btn1.addEventListener('click', () => {
    const listItems = ['css-loader', 'sass-loader', 'style-loader', 'node-loader', 'stylus-loader'];
    _.forEach(listItems, (item) => {
        const tempEl = document.createElement('li');
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
})