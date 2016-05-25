var trigger     = document.getElementById("navigation");
var header      = document.getElementById("header");
var overlay     = document.getElementById("overlay-search");

trigger.addEventListener("click", function(e) {
    if(e.target.tagName == "LI" && document.body.clientWidth < 800){
        e.preventDefault();
        e.target.classList.toggle("open");
    } else if(e.target.id == "nav-handle"){
        trigger.classList.toggle("enabled");
    }
});

header.addEventListener("click", function(e) {
    if(e.target.id == "search-trigger" || e.target.className == "field-label" || e.target.tagName == "SPAN"){
        overlay.classList.toggle("enabled");
    }
});

