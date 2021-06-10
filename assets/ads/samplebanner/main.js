

var assets,manifest,scripts;


var clickTag = 'https://www.google.com';

    //--------------preload---------------------
    
function preloadfiles(){

    assets = new createjs.LoadQueue(false);
    manifest=[
        {src: 'sprite.png'},
        {src: 'bg.jpg'},
        {src: 'butterfly1.png'},
        {src: 'butterfly2.png'},
    ];

    if(scripts) manifest.push({src:scripts}); 
    assets.loadManifest(manifest);
    assets.on('complete',function(){
        if(scripts){
            var js = document.createElement('script');
            js.src = scripts;
        }
        startAnim();
    });

}

window.onload = preloadfiles();



function startAnim() {
    
    //--------------- SET -----------------
    gsap.set('#container', {display: 'block'});
    
    //gsap.set('.imgfix', {rotation: 0.01, force3D: true, willChange: 'transform'});
    gsap.set('.sprite', {rotation: 0.01, force3D: true, willChange: 'transform'});
    gsap.set(['.welcome_1', '.welcome_2', '.welcome_3'], {transformOrigin: 'center center'});
    gsap.set('.cta2', { opacity:0})
    //------------ ADD EVENT --------------

    addEvent();

    var tl = gsap.timeline({ ease : 'none'});

    
    tl.add('Scene1')

        .from ('.cl_1', { duration : 15, x : -200 }, 'Scene1' )
        .from ('.cl_2', { duration : 15, x : -200 }, 'Scene1' )
        .from ('.cl_3', { duration : 15, x : -150 }, 'Scene1' )
        .from ('.cl_4', { duration : 15, x : -100 }, 'Scene1' )

        .from ('.butterfly_a', { duration : 1, y : 5, yoyo: true, repeat:-1, ease : 'sine.inOut'  }, 'Scene1' )
        .to('.butterfly_a', { duration: 1, backgroundPosition:'240px 0px', ease:'steps(4)', yoyo: true, repeat: -1 }, 'Scene1' )  
        .from ('.butterfly_b', { duration : 1, y : -5, yoyo: true, repeat:-1, ease : 'sine.inOut'  }, 'Scene1' )  
        .to('.butterfly_b', { duration: .5, backgroundPosition:'160px 0px', ease:'steps(2)', yoyo: true, repeat: -1 }, 'Scene1' )    
        .to ('.bike_2', { duration : 1.3, x : -1138, ease: 'power1.out'}, 'Scene1+=0.5' )
        .from ('.food_1', { duration : 0.5, x : -600 }, 'Scene1+=1.2' )
        .from ('.food_2', { duration : 0.5, x : -600 }, 'Scene1+=1.4' )

        .from (['.welcome_1', '.welcome_2', '.welcome_3'], { duration : 1, scale : 0, y: 10, opacity:0, stagger:0.2, ease : 'elastic(1, 0.8)' }, 'Scene1+=2' )
        .to (['.welcome_1', '.welcome_2', '.welcome_3'], { duration : .3, scale: 0, opacity:0, stagger:0.15, ease : 'power2.out'}, 'Scene1+=3.5' )

        .from (['.headline_2a', '.headline_2b', '.headline_2c'], { duration : .5, scaleX : 0.2, x : 300, stagger:0.2 }, 'Scene1+=4')

        .to ('.bike_1', { duration : 1, x : 1300, ease: 'power1.out'}, 'Scene1+=4.7' )
        .from ('.logo', { duration : 0.5, x : -500, ease: 'power1.out'}, 'Scene1+=5' )

        .add('ball', 'Scene1+=5.5')
        .from ('.ball1', { duration : 0.5, y : -50, repeat : 5, yoyo:true, ease : 'power1.in' }, 'ball')
        .from ('.ball1', { duration : 5, x : 550, rotation:560 }, 'ball')
        .from ('.ball2', { duration : 5, x : 550}, 'ball')
        .from ('.ball2', { duration : 0.5, scaleX : 0.5, repeat : 5, yoyo:true, ease : 'power1.in' }, 'ball')
        .to ('.ball1', { duration : 1, y : 0, ease : 'bounce'}, 'ball+=3')
        .to ('.ball2', { duration : 1, scaleX :1, ease : 'bounce'}, 'ball+=3')

        .from ('.cta', {duration : 1, x : 400, ease : "power2.out", onComplete: hoverFunction }, 'Scene1+=8')

        .from ('.legal', {duration : 2, opacity : 0 }, 'Scene1+=8.7')

        .add(function(){gsap.globalTimeline.clear();},'Scene1+=15');

      
};

function addEvent() {

    $('#clickthru').on('click', exit);
};

function exit() {

    //-----------exit guide--------------------------
    //--adword--> ExitApi.exit();
    //--adgear--> ADGEAR.html5.clickThrough('clickTAG');
    //--studio--> Enabler.exit('Background Exit'); 
    //--standard/sizemek/adword no-api--> window.open(clickTag);
    //-----------exit--------------------------------
    window.open(clickTag);
}

function hoverFunction() {

    var clicktru = document.getElementById ('clickthru');

    clicktru.addEventListener('mouseenter', function () {
       gsap.to ('.cta2', {duration : 0.6, opacity: 1 });
    });
    clicktru.addEventListener('mouseleave', function () {
        gsap.to ('.cta2', {duration : 0.6, opacity: 0 });
    });
    


}

//-------------------------------------
