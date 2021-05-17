function showMenu(){
    document.getElementById("lightbox").classList.remove("hidden");
    document.getElementById("mobile-menu").classList.remove("hidden");
}

function hideMenu(){
    document.getElementById("lightbox").classList.add("hidden");
    document.getElementById("mobile-menu").classList.add("hidden");
}

function showSubMenu(){
    document.getElementById("mobile-submenu").classList.remove("hidden");
}

function hideSubMenu(){
    document.getElementById("mobile-submenu").classList.add("hidden");
}