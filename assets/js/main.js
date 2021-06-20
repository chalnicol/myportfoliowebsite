
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

    activateScrollTrigger ();

  });

}

function loadPage ()
{

    //load what i do elements

    var circlesCount = 10;

    $('#pic').append ('<img src="assets/images/'+ mydata.details.image +'" alt="self" class="img-fluid img-thumbnail rounded" >');

    $('#details').append ('<p class="my-1">'+ mydata.details.whatido + '</p>');

    // for ( var i = 0; i < circlesCount; i++ ) {

    //   $('.bg-anims').append ('<div class="circle"></div>');

    // }
    


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
                            <h5><strong>`+ recentWork[i].title +`</strong></h5>
                            <p class="px-1">`+ recentWork[i].description +`</p>
                            <a href="`+ recentWork[i].link +`" target="_blank" class="btn btn-custom1">`+ recentWork[i].cta +`</a>
                        </div>
                      </div>
                    </div>`;

          $('#projects_cont').append ( str );

        }

    }

    //load work history

    var workHistory = mydata.workhistory;

    if ( workHistory.length > 0 ){

        for (var i = 0; i < workHistory.length; i++ ) { 
        
          var desc = '';

          for ( var j = 0; j < workHistory[i].job_desc.length; j++ ) {

            desc += '<li>'+ workHistory[i].job_desc[j] +'</li>';

          }

          var company = workHistory[i].company == '' ? 'N/A' : workHistory[i].company;

          var stra = `<div class="row mb-1">
                        <div class="col-lg-4 bg-custom1 rounded">
                          <div class="text-white p-2">`+ workHistory[i].date.from +` – `+ workHistory[i].date.to +`</div>
                        </div>
                        <div class="col-lg-8 bg-custom3 rounded-right">
                          <small> Company : `+ company +`</small>
                          <h5 class="m-0"><strong>`+ workHistory[i].job_title +`</strong></h5>
                          <ul>`+ desc + `</ul>
                        </div>

                      </div>`;

          $('#work_cont').append (stra);

        }

    }


    var contacts = mydata.contacts;

    if ( contacts.length > 0 ){

        for ( var i = 0; i < contacts.length; i++ ) {

          $('#contacts_cont').append ('<div class="mb-2"><span class="material-icons align-bottom mr-2">'+ contacts[i].icon +'</span>'+ contacts[i].value +'</div>')
        }
    }

    var socmed = mydata.socialmedia;

    if ( socmed.length > 0 ){

        for ( var i = 0; i < socmed.length; i++ ) {

          var strc = `<div class="mr-2">
                        <a href="`+ socmed[i].link+`" target="_blank">
                          <img src="assets/images/socials/`+ socmed[i].img +`" alt="`+ socmed[i].name +`" class="img-fluid" width="50"> 
                        </a>
                      </div>`;

          $('#socials_cont').append (strc);

        }
    }
}

function getRandomColor () {

    return 'rgba('+ Math.floor(Math.random () *256 ) +', '+ Math.floor(Math.random () *256 ) +', '+ Math.floor(Math.random () *256 )+', 0.3 )'
}

function activateScrollTrigger () {

  gsap.registerPlugin ('ScrollTrigger');

  var w = gsap.getProperty ('#whatido', 'width'), 
      h = gsap.getProperty ('#whatido', 'height');
    
  let tla = gsap.timeline ({
    scrollTrigger : {
      trigger : "#about",
      start : "top 45%",
    }
  });

  tla
      .from ('#pic', { duration : 0.5, x: -w/3, opacity:0,})
      .to ('#pic', { duration : 1, rotation : 360, scale:0.8, x : w*0.1, yoyo:true, ease : 'power2.out', repeat: 1, repeatDelay : 0.5 })
      .to ('#pic', { duration : 1, y : -30, yoyo:true, ease : 'bounce.in', repeat: 1 }, '-=2.8')
      .from ('#details', { duration : 1, opacity:0, y: -50, ease : "bounce.out"});

  

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
    x : -30,
    duration : 1,
    ease : 'elastic(1,0.8)',
    stagger : {
      each : 0.3
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





