document.addEventListener("DOMContentLoaded", function () {
    console.log("GLOWÉ SKIN website is ready!");

    const shopButtons = document.querySelectorAll(".shop-button");

    shopButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            console.log("A GLOWÉ SKIN product link was clicked.");
        });
    });
});