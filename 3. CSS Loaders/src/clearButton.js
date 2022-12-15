// import style from "./clearButton.css";

const el = document.createElement('button');
el.innerHTML = "Clear";
el.classList.add(["button"]);
el.onclick = () => {
    alert('Clear Clicked');
};
document.body.appendChild(el);