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

        document.body.addEventListener("dragstart", moveStart, false); // set an event handler for the dragstart event
}());