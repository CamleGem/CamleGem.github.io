var h = document.querySelector('h1');
h.textContent = 'Hello World!';


let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = this.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        this.setAttribute('src', 'images/firefox3.png');
    } else {
        this.setAttribute('src', 'images/firefox-icon.png');
    }
}

let btn = document.querySelector('button');

function setUserName() {
    let name = prompt("请输入你的名字");
    if (!name || name === null) {
        setUserName();
    }
    localStorage.setItem('name', name);
    h.textContent = "Mozilla 酷毙了!!! " + name;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    h.textContent = "Mozilla 酷毙了!!! " + storedName;
}

btn.onclick = function () {
    setUserName();
}