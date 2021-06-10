
window.onload = function () {

    gsap.registerPlugin ('ScrollTrigger');
    gsap.set (['.my-img', '.card-custom'], {transformOrigin : '50% 50%'});

    let tla = gsap.timeline ({
    scrollTrigger : {
        trigger : "#about",
        start : "top 45%",
    }
    });

    tla.from ('#pic', { duration : 0.6, x: -500, opacity:0, ease : "power2.in" })
    .from ('#details', { duration : 1, opacity:0, y: -50, ease : "power2.in"} );

    let tl = gsap.timeline ({
    scrollTrigger : {
        trigger : "#skill-table",
        // toggleActions : "restart pause none none",
        start : "top 80%",
        // end : 'top 100px'
    }
    });

    tl.from ('.my-block', { duration : 0.5, scale: 0, x : '-200', opacity:0, stagger:0.1, ease : "power2.out" })
    
    .from ('.my-img', { duration : 0.5, scale: 0, rotation: 360, stagger : 0.09, ease : "power2.in"}, '-=0.5' );

    let tlb = gsap.timeline ({
    scrollTrigger : {
        trigger : "#skill-table",
        // toggleActions : "restart pause none none",
        start : "top 45%",
        // end : 'top 100px'
    }
    });

        
    gsap.from ('.card-custom', {
      scrollTrigger : {
        trigger : '#projects_cont',
        start : "top 80%",
      }, 

      scale : 0,
      y : -20,
      duration : 0.5,
      ease : 'power1.inOut',
      stagger : {
        each : 0.1
      },
      onComplete : () => hoverFunc()
    });


    function hoverFunc () 
    {

    var cards = document.querySelectorAll('.card-custom');

    cards.forEach ( (el, index) => {

    el.addEventListener ('mouseenter', () => {

        gsap.to ( el, { duration : 0.2, scale : 1.05, ease : 'power1.in '});
    });
    el.addEventListener ('mouseleave', () => {
        gsap.to ( el, { duration : 0.2, scale : 1, ease : 'power1.in '});
    });

    }); 

    }


}

