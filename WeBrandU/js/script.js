'use strict'

window.addEventListener("load", () =>{

    function colorChange(){
        window.onscroll = function() {
            var scrolled = window.scrollY;
            var brand = document.querySelector("#brand");
            console.log(scrolled);

            if(scrolled < 100) {
                brand.style.transform = "scale(1)"
                brand.style.transition = "all 1s";
                document.getElementById("brand").innerHTML = "<h3>We Brand U</h3>";
            }
            else {
                brand.style.transform = "scale(1.5)"
                brand.style.transition = "all 1s";
                document.getElementById("brand").innerHTML = "<h4>W B U</h4>";
            }

        };

    }
    colorChange();
});