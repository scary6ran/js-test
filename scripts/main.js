//
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kitten.jpeg') {
        myImage.setAttribute('src','images/tiger.jpeg');

    } else {
        myImage.setAttribute('src', 'images/kitten.jpeg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem=('name', myName);
        myHeading.textContent = 'cat is cool, ' + myName + '!';
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'cat is cool, ' + storedName + '!';
}
myButton.onclick = function () {
    setUserName();
}