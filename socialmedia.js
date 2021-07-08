function setUp() {
    var button = document.getElementById("circle-switch");
    var back = document.getElementById("background-holder");
    var buttonBack = document.getElementById("toggle-master");
    var headBack = document.getElementById("head-wrapper");
    var spliter = document.getElementById("line-split");
    var dataHead = document.getElementById("present-overview");
    var headers = document.querySelectorAll("#head-words");
    var dashboard = document.getElementById("head-word");
    var potters = document.querySelectorAll("#potter-word");
    var dataCarriers = document.querySelectorAll("#data-words");
    var topper = document.querySelectorAll("#names");
    var lower = document.querySelectorAll("#usernames");
    var readers = document.querySelectorAll("#hayley-baby");
    var mincers = document.querySelectorAll("#social-info");
    var pincers = document.querySelectorAll("#kept-scores");



    button.onclick = function() {

        if (button.className == "") {
            button.className = "first";
            buttonBack.className = "second";
            back.className = "third";
            headBack.className = "fourth";
            spliter.className = "fifth";
            dataHead.className = "eighth";
            dashboard.className = "ninth";
            Array.from(headers).forEach(function(header) {
                header.className = "sixth";
            });
            Array.from(dataCarriers).forEach(function(data) {
                data.className = "seventh";
            });
            Array.from(potters).forEach(function(potter) {
                potter.className = "tenth";
            });
            Array.from(topper).forEach(function(top) {
                top.className = "eleventh";
            });
            Array.from(lower).forEach(function(low) {
                low.className = "twelveth";
            });
            Array.from(readers).forEach(function(read) {
                read.className = "thirteenth";
            });
            Array.from(mincers).forEach(function(mince) {
                mince.className = "fourteenth";
            });
            Array.from(pincers).forEach(function(pince) {
                pince.className = "fifteenth";
            });
        }
 
       else {
            back.className = "";
            button.className = "";
            spliter.className = "";
            headBack.className = "";
            buttonBack.className = "";
            dataHead.className = "";
            dashboard.className = "";
            Array.from(headers).forEach(function(header) {
                header.className = "";
            });
            Array.from(dataCarriers).forEach(function(data) {
                data.className = "";
            });
            Array.from(potters).forEach(function(potter) {
                potter.className = "";
            });
            Array.from(topper).forEach(function(top) {
                top.className = "";
            });
            Array.from(lower).forEach(function(low) {
                low.className = "";
            });
            Array.from(readers).forEach(function(read) {
                read.className = "";
            });
            Array.from(mincers).forEach(function(mince) {
                mince.className = "";
            });
            Array.from(pincers).forEach(function(pince) {
                pince.className = "";
            });
        }
        
        
    }
}

window.onload = function() {
    setUp();
}