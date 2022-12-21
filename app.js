// get cards id and set mousemove listener
document.getElementById("cards").onmousemove = e => {
    // iterate over card classes
    for(const card of document.getElementsByClassName("card")) {
        // calc mouse position relative to each card
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        // set custom css properties with x and y coordinates
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}