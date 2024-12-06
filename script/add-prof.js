document.addEventListener("DOMContentLoaded", () => {
    const icContainer = document.querySelector(".kid-profile .btn .ic");
    const minusIcon = icContainer.querySelector(".fa-minus");
    const checkIcon = icContainer.querySelector(".fa-check");
    let isMinusActive = true;
    icContainer.addEventListener("click", () => {
        console.log("Toggling icons..."); // Debug
        if (isMinusActive) {
            minusIcon.style.transform = "translateX(50px)";
            minusIcon.style.opacity = "0";
            checkIcon.style.transform = "translateX(0)";
            checkIcon.style.opacity = "1";
            icContainer.style.backgroundColor = "blue";
            checkIcon.style.color = "white";
        } else {
            checkIcon.style.transform = "translateX(50px)";
            checkIcon.style.opacity = "0";
            minusIcon.style.transform = "translateX(0)";
            minusIcon.style.opacity = "1";
            icContainer.style.backgroundColor = "#8a8888";
            minusIcon.style.color = "black";
        }
        isMinusActive = !isMinusActive;
        console.log("IsMinusActive:", isMinusActive); // Debug
    });
});