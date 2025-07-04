/* to move the pointer with mouse*/
var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

/*Nav hover */
const navItems = document.querySelectorAll("#nav h4");

  navItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hovered");
    });
  });


/* arrow functionality */
 document.getElementById("arrow").addEventListener("click", function () {
    document.getElementById("targetSection").scrollIntoView({
      behavior: "smooth"
    });
  });


gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})
/* color change while scrolling to next page*/
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end:"top -70%",
        scrub:2
    }
})
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.to(".card", {
  scale: 0.8,
  opacity: 0.8,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    start: "top 90%",
    end: "top 60%",
    toggleActions: "play none none reverse"
  },
});

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger: "#colon1",
    scroller:"body",
    start: "top 55%",
    end: "top 45%",
    scrub:4
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger: "#colon1",
    scroller:"body",
    start: "top 55%",
    end: "top 45%",
    scrub:4
  }
})
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger: "#page4 h1",
    scroller:"body",
    /* markers: true,*/
    start: "top 75%",
    end: "top 70%",
    scrub:3
  }
})
