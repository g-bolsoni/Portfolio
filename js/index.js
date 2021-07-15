
document.addEventListener('DOMContentLoaded', () =>{
    const timeLine = gsap.timeline();
    console.error(timeLine)

    timeLine.from(".menu-1", {
        duration: 1,
        opacity:0, 
        y:20,
        delay:0.5,
        ease:"back"
    })
    .from(".menu-2", {
        duration: 1,
        opacity:0, 
        y:20,
        ease:"back",
    }, "-=0.8")
    .from(".menu-3", {
        duration: 1,
        opacity:0, 
        y:20,
        ease:"back",
    }, "-=0.8")
    .from(".menu-4", {
        duration: 1,
        opacity:0, 
        y:20,
        ease:"back"
    }, "-=0.8")
    .from(".menu-5", {
        duration: 1,
        opacity:0, 
        y:20,
        ease:"back"
    }, "-=0.8")
    .from(".container-item div", {
        duration: 1,
        opacity:0, 
        stagger:{each:0.2},
        y:300,
        ease:"back"
    }, "-=0.8")
    .from(".container-item img", {
        duration: 1,
        opacity:0, 
        y:300,
        ease:"back"
    }, "-=0.8")



    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#section01 div",  {
            duration: 1,
            opacity:0, 
            y:300,
            stagger:{each:0.2},
            ease:"power3.out",
            scrollTrigger:{
                trigger: '#section01'
            }
    },"-=0.8")
    .from("#section02 h3",  {
        duration: 1,
        opacity:0, 
        y:300,
        stagger:{each:0.2},
        ease:"power3.out",
        scrollTrigger:{
            trigger: '#section02',
        }
},"-=0.8")
})
