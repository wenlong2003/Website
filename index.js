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