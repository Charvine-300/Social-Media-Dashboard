function setUp() {
    var button = document.getElementById("circle-switch");
    var buttonBack = document.getElementById("toggle-master");

    button.setAttribute("class", "baseline");

    button.onclick = function() {

        if (button.className == "baseline") {
            button.style.float = "left";
            button.style.backgroundColor = "hsl(232, 19%, 15%)";
            buttonBack.style.background = "linear-gradient (90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"; 
        }
 
       if (button.style.float = "left") {
        button.style.float = "right";
        button.style.backgroundColor = "hsl(0, 0%, 97%)";
       }
        
        
    }
}

window.onload = function() {
    setUp();
}