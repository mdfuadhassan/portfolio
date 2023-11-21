//  Setup and start animation!
var typed = new Typed('#element', {
    strings: ['Font-end Developer'],
    typeSpeed: 50,
});

// Sidebar script
function barsFunction() {
    var pageLink = document.querySelector(".page-link");
    pageLink.style.right = "5px";

    var barsIcon = document.querySelector("#bars-icon");
    barsIcon.style.display = "none";

    var barsIcon2 = document.querySelector("#bars-icon2");
    barsIcon2.style.display = "block";
};


function barsFunction2() {
    var pageLink = document.querySelector(".page-link");
    pageLink.style.right = "-170px";

    var barsIcon = document.querySelector("#bars-icon");
    barsIcon.style.display = "block";

    var barsIcon2 = document.querySelector("#bars-icon2");
    barsIcon2.style.display = "none";
};
