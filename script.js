document.addEventListener("DOMContentLoaded", function () {

    console.log("PHIL Mobile Logistics Website Loaded");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

});
