document.addEventListener("DOMContentLoaded", () => {
    const myButton = document.getElementById("button");

    if(myButton) {
        myButton.addEventListener('click', () => {
            window.location.href = "index.html";
        });
    }
});

function scrollToTopic(elementSelector, instance = 0) {
    const element = document.querySelectorAll(elementSelector);

    if(element.length > instance) {
        element[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToTopic('.header');
});

link2.addEventListener('click', () => {
    scrollToTopic('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToTopic('.column');
});

const div = document.querySelector('.text');

function typeWriter(element, text, speed = { type: 110, delete: 70, pause: 1000 }, i = 0, deleting = false) {
    element.textContent = text.substring(0, i);

    if (!deleting && i < text.length) {
        setTimeout(() => typeWriter(element, text, speed, i + 1, false), speed.type);
    } else if (!deleting && i === text.length) {
        setTimeout(() => typeWriter(element, text, speed, i, true), speed.pause);
    } else if (deleting && i > 0) {
        setTimeout(() => typeWriter(element, text, speed, i - 1, true), speed.delete);
    } else {
        setTimeout(() => typeWriter(element, text, speed, 0, false), speed.pause);
    }
}

typeWriter(div, "Hello World!", { type: 100, delete: 50, pause: 1000 });