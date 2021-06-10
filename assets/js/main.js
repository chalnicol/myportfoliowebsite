

var mydata;

window.onload = loadJSON;


function loadJSON () {

  fetch("assets/json/data.json")
  .then(response => {
     return response.json();
  })
  .then(data => {
    
    console.log ( data );
    
    mydata = data;
    
    loadPage ();

    startAnim ();

  });

}


function loadPage ()
{


    $('#pic').append ('<img src="assets/images/'+ mydata.image +'" alt="self" class="img-fluid img-thumbnail" >');

    $('#details').append ('<p class="my-1">'+ mydata.whatido + '</p>');

    //load skills..
    var skills = mydata.skills.programming.tech;

    if ( skills.length > 0 ){

        for (var i = 0; i < skills.length; i++ ) {

          $('#'+skills[i].proficiency).append ('<img src="assets/images/skills/'+ skills[i].img +'" alt="'+skills[i].title+'" class="img-fluid rounded my-img">')

        }

    }

    //load recent projects

    

    var recentWork = mydata.recentwork;

    if ( recentWork.length > 0 ){

        for (var i = 0; i < recentWork.length; i++ ) {

          var str = `<div class="col-sm-6 col-md-4 col-lg-3" >
                      <div class="card-custom mx-auto" >
                        <img class="img-fluid w-100" src="assets/images/recent/`+ recentWork[i].img +`" alt="Connect Four">
                        <div class="p-2">
                            <h5 class="p-1">`+ recentWork[i].title +`</h5>
                            <p class="px-1">`+ recentWork[i].description +`</p>
                            <a href="`+ recentWork[i].link +`" target="_blank" class="btn btn-custom1">`+ recentWork[i].cta +`</a>
                        </div>
                      </div>
                    </div>`;

          $('#projects_cont').append ( str );

        }

    }


}

function startAnim () {

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
      trigger : "#skill_cont",
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


}

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





