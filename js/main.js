//  Active navbar 
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// Nav Hide
let navBar=document.querySelectorAll(" .nav-item");
let navCollapse=document.querySelectorAll(".collapse .navbar-collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    });
})