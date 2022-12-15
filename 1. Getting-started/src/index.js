import _ from 'lodash';

document.getElementById('btn-1').addEventListener('click', () => {
    const el = document.getElementById("header");
    el.innerHTML = "Hey! I've updated the code.";

    const listItems = ["Christmas Tree", "christmas lights", "christmas balls", "socks", "candy", "cake", "sweaters"];
    const ul = document.getElementById("shoppingList");
    _.forEach(listItems, (item) => {
        const tempEl = document.createElement("li");
        tempEl.innerHTML = item;
        ul.appendChild(tempEl);
    });
});
