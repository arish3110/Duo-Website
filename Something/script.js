function init(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },   getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

init()

var cursor= document.querySelector(".cursor")
var main=document.querySelector("#main")
var video=document.querySelector("video")
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+20+"px"
    cursor.style.top=dets.y+20+"px"

})
// video.addEventListener("mouseenter",function(dets){
//   // cursor.style.left=dets.x+"px"
//   // cursor.style.top=dets.y+"px"
//   var x = cursor.style ;
//   cursor.innerText="hey"
//   x.width="100px";
  
//   x.height="30px";
//   x.borderRadius="5px";
//   x.color="black";
//   x.backgroundColor="#fff";


//   // x.dispaly="flex";

// })

// video.addEventListener("mouseleave",function(dets){
//   // cursor.style.left=dets.x+"px"
//   // cursor.style.top=dets.y+"px"
//   var x = cursor.style ;
//   cursor.innerText="  "
//   x.width="100px";
  
//   x.height="30px";
//   x.borderRadius="5px";
//   // x.dispaly="flex";

// })
var tl1=gsap.timeline({
  scrollTrigger: {
    trigger:"#page1 h1",
    scroller:"#main",
    // markers:true,
    start:"top 30%",
    end:"top 0",
    scrub:3
  }
})
tl1.to("#page1 h1",{
  x:-100
},"anim")

tl1.to("#page1 h2",{
  x:100
},"anim")

tl1.to("#page1 video",{
  width:"90%"
},"anim")
tl1.to("#main",{
  backgroundColor:"#fff",
  
})
var tl2=gsap.timeline({
  scrollTrigger: {
    trigger:"#page1 h1",
    scroller:"#main",
    // markers:true,
    start:"top -280%",
    end:"top -300%",
    scrub:3
  }
})
tl2.to("#main",{
  backgroundColor:"#0F0D0D"
})
var boxes=document.querySelectorAll(".box")
boxes.forEach(function(elem){
      elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-image")
        cursor.style.width="400px"
        cursor.style.height="350px"
        cursor.style.borderRadius="0"
        cursor.style.backgroundImage=`url(${att})`
      })
      elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent"
        cursor.style.width="20px"
        cursor.style.height="20px"
        cursor.style.borderRadius="50%"
        cursor.style.backgroundImage=`none`
      })
})
var h4=document.querySelectorAll("#nav h4")
var pur=document.querySelector("#purple")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
        pur.style.display="block"
        pur.style.opacity="1"
  })
  elem.addEventListener("mouseleave",function(){
        pur.style.display="none"
        pur.style.opacity="0"
  })
})