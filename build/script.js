// Menunun responsive yapımı
const menu = document.querySelector(".menu");
const responsiveMenu = document.querySelector(".responsiveMenu");
const menus = document.querySelectorAll(".navbar ul a");

menu.addEventListener("click" , () => {
    responsiveMenu.classList.toggle("active");
});

menus.forEach(e =>{
    e.addEventListener("click" , () =>{
        responsiveMenu.classList.remove("active");
    });
});


// Sayfalar asagı kaydıgında navbarın css degısmesı alması
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 80){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
})


// menuye tıkladıgımda scroolun sıfırlanması
const li_es = document.querySelectorAll(".navbar ul li");

li_es.forEach(li =>{
    li.addEventListener("click" , () =>{
        window.scrollTo(0, 0);
    });
});
