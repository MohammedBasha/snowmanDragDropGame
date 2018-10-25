var dragndrop = (function() { // sel executed protected namespace variable
    var offsetX = "", // grapping the horizontal offset
        offsetY = "", // grapping the vertical offset
        whichArt = ""; // grapping the art element

    function moveStart(e) {
        whichArt = e.target; // grapping the targeted element in the variable
        offsetX = e.offsetX === "undefined" ? e.layerX : e.offsetX; // set a polyfill for the X offset variable
        offsetY = e.offsetY === "undefined" ? e.layerY : e.offsetY; // set a polyfill for the Y offset variable
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

        document.body.addEventListener("dragstart", moveStart, false); // set an event handler for the dragstart event

        document.body.addEventListener("dragover", moveDragOver, false); // set an event handler for the dragover event

        document.body.addEventListener("drop", moveDrop, false); // set an event handler for the drop event
}());