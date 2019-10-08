function mostrarmenu() {
    document.getElementById('html').className="htmlclass";    
    document.getElementById('hamburguesa').className="menu-activo";    
    window.onscroll = function () { window.scrollTo(0, 0); window.scroll };
    
}

function ocultarmenu() {
    document.getElementById('hamburguesa').className = "menu-oculto";
    window.onscroll = function () { }
    document.getElementById('html').className="";
}