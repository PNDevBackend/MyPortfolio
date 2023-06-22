
    let toggleBtn=document.querySelector(".toggleBtn");
    let nav=document.querySelector(".navlinks");
    let links=document.querySelector(".navlinks li");
    toggleBtn.addEventListener("click",function(){
        this.classList.toggle("click");
        nav.classList.toggle("open");
    })
    let typed=new Type(".input",{
        strings:["Backend Developer","UX Designer","Web Developer"],
        typeSpeed:70,
        backSpeed:55,
        loop:true
    })
  