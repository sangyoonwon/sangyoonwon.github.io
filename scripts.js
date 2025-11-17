function hideBar(element) {
    if (window.innerWidth <= 600) {
        element.classList.toggle("nav-visible");
        
        if (element.classList.contains("nav-visible")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

    } else {
        element.classList.toggle("nav-hidden");
        const content = document.getElementsByClassName('container-content')[0];
        content.classList.toggle("content-full");
    }
}