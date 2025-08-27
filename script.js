let tl = gsap.timeline()
tl.from("nav h1 , nav h4, nav button" ,{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:1,
    stagger:0.2
})


tl.from(".center_part1 h1",{
    x:-200,
    opacity:0,
    duration:0.6
})

tl.from(".center_part1 p",{
    x:-200,
    opacity:0,
    duration:0.8
})
tl.from(".center_part1 button",{
    opacity:0,
    duration:0.8
})

tl.from(".center_part2 img",{
    opacity:0,
    duration:0.8
},"-=0.3")


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:2,
        markers:true
    }
})


gsap.from(".sectionbtm img", {
    y:30,
    opacity:0,
    stagger:0.3,
    duration:2,
    scrollTrigger:{
         trigger:".sectionbtm img",
        scroller:"body",
        start:"top 50%",
        end:"top 30%",
        scrub:2,
        markers:true
    }
})


tl2.from(".services",{
    x:-100,
    duration:1,
    opacity:0
})

tl2.from(".elem.line1.left",{
    x:-200,
    opacity:0,
    duration:2,
    delay:1
},"anim")

tl2.from(".elem.line1.right",{
    x:200,
    opacity:0,
    duration:2,
    delay:1
},"anim")
tl2.from(".elem.line2.left",{
    x:-200,
    opacity:0,
    duration:2,
    delay:1
})

tl2.from(".elem.line2.right",{
    x:200,
    opacity:0,
    duration:2,
    delay:1
})

