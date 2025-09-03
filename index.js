fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const link1 = document.getElementById("link1");
    const link2 = document.getElementById("link2");
    const link3 = document.getElementById("link3");

    link1.addEventListener('click', () => {
        scrollToView('.header');
    });

    link2.addEventListener('click', () => {
        scrollToView('.header', 1);
    });

    link3.addEventListener('click', () => {
        scrollToView('.column');
    });
  })
  .catch(error => console.error("Error loading navbar:", error));


function scrollToView(elementID, instance = 0) {
    const element = document.querySelectorAll(elementID);

    if(element.length > instance) {
        element[instance].scrollIntoView({behavior: 'smooth'});
    }
}