var dragndrop = (function() { // sel executed protected namespace variable
    var offsetX = "", // grapping the horizontal offset
        offsetY = "", // grapping the vertical offset
        whichArt = ""; // grapping the art element

    function resetZIndex() { // creating a reset function for the z-index
        var elements = document.querySelectorAll("img"); // grap all the imgs
        for (let i = elements.length - 1; i >= 0; i--) { // loop through them and set the z-index to 5
            elements[i].style.zIndex = 5;
        }
    };

    function moveStart(e) {
        whichArt = e.target; // grapping the targeted element in the variable
        offsetX = e.offsetX === "undefined" ? e.layerX : e.offsetX; // set a polyfill for the X offset variable
        offsetY = e.offsetY === "undefined" ? e.layerY : e.offsetY; // set a polyfill for the Y offset variable
        resetZIndex(); // call the reset z-index function for all imgs
        whichArt.style.zIndex = 10; // reset the index to be on the top of any element when moving
    };

    function moveDragOver(e) {
        e.preventDefault(); // preventing the default behavior of different browsers
    };

    function moveDrop(e) {
        e.preventDefault(); // preventing the default behavior of different browsers
        whichArt.style.left = e.pageX - offsetX + "px"; // calculate the X offset if the clicked element right now
        whichArt.style.top = e.pageY - offsetY + "px"; // calculate the Y offset if the clicked element right now
    };

    function touchStart(e) {
        e.preventDefault();
        var whichArt = e.target,
            touch = e.touches[0],
            moveOffsetX = whichArt.offsetLeft - touch.pageX,
            moveOffsetY = whichArt.offsetTop - touch.pageY;
            resetZIndex();
            whichArt.style.zIndex = 10;

        whichArt.addEventListener("touchmove", function () {
            var positionX = touch.pageX + moveOffsetX,
                positionY = touch.pageY + moveOffsetY;
            whichArt.style.left = positionX + "px";
            whichArt.style.top = positionY + "px";
        }, false);
    };

        document.body.addEventListener("dragstart", moveStart, false); // set an event handler for the dragstart event

        document.body.addEventListener("dragover", moveDragOver, false); // set an event handler for the dragover event

        document.body.addEventListener("drop", moveDrop, false); // set an event handler for the drop event

        document.body.addEventListener("touchstart", touchStart, false); // set an event handler for the touchstart event for mobile devices
}());