gsap.from(".page1 #box" ,{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})
gsap.from(".page2 #box" ,{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger: ".page2 #box",
        scroller:"body",
        markers:true
    }
})
gsap.from(".page3 #box" ,{
    scale:0,
    rotate:360,
    delay:2,
    duration:2,
    scrollTrigger:".page3 #box"
})