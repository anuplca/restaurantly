// owl-carousel
$(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 2000,
            smartSpeed: 200,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                600: {
                    items: 1,
                    nav: false,
                },
                1000: {
                    items: 1,
                    nav: false,
                },
            },
        });
    });


// onscroll
window.onscroll = function () {
        myFunction();
    };
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

// filterSelection
filterSelection("all");
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }
    function w3AddClass(element, name) {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }
    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    var btnContainer = document.getElementById("btn-container");
    var btns = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove("active");
            }
            btns[i].classList.add("active");
        });
    }

// Toggle
function toggle(){
  var mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle('active')
}

// Back to top button
var btn = $("#button");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            btn.addClass("show");
        } else {
            btn.removeClass("show");
        }
    });
    btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
});