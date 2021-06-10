var assets,manifest,scripts;

    //--------------preload---------------------
    
function preloadfiles(){

    assets = new createjs.LoadQueue(false);
    manifest=[
        {src: 'sprite.png'},
        {src: 'bg1.jpg'},
        {src: 'bg2.jpg'},
        {src: 'prod.png'},
        {src: 'ralph.png'},
        {src: 'seq.png'}
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


var tl = gsap.timeline();
    function startAnim() {
        
        //--------------- SET -----------------
        gsap.set('#container', {display: 'block'});
        gsap.set('.imgfix', {rotation: 0.01, force3D: true, willChange: 'transform'});
        gsap.set('.sprite', {rotation: 0.01, force3D: true, willChange: 'transform'});
        gsap.set('.bg1', {transformOrigin: '100% 100%'});
        gsap.set('.bg2', {transformOrigin: '50% 93%'});
        gsap.set('.seq', {scale:0.7});
        //------------ ADD EVENT --------------
        addEvent();
        
        //---------- ADD ANIMATION ------------
        tl
            //=========================
            .add('Scene1')
            .to('.bg1', {duration: 10, scale: .8, ease: 'none'}, 'Scene1')
            .from('.t1', {duration: .8, stagger: .2, opacity: 0, y: 8, ease: 'power1.out'}, 'Scene1')
        
            .add('Scene2','Scene1+=2.5')
            .to(['.bg1', '.t1'], {duration: .6, opacity: 0}, 'Scene2')
            .to('.bg2', {duration: 10, scale: .8, ease: 'none'},'Scene2')
            .from(['.text2-1','.text2-2','.text2-3'], {duration: .8, opacity: 0, y: 8, ease: 'power1.out'}, 'Scene2+=.3')   
            .from('.text2-4', {duration: .8, opacity: 0, y: 8, ease: 'power1.out'}, 'Scene2+=.5')   
            .from('.text2-5', {duration: .8, opacity: 0, y: 8, ease: 'power1.out'}, 'Scene2+=.7')   
            .from('.ralph,.seq',{duration: 0.8, opacity:0, ease:'power1.out'},'Scene2+=.3')
            .from('.text2-2not', {duration: .8, y: -300, ease: 'back.out(.6)'},'Scene2+=1')
            .set('.text2-2', {opacity: 0}, 'Scene2+=1.5')
            .to('.text2-1', {duration: .2, scaleY: .92, rotation:  2, yoyo: true, repeat: 1, transformOrigin: 'bottom center'},'Scene2+=1.4')
            .to('.text2-3', {duration: .2, scaleY: .92, rotation: -2, yoyo: true, repeat: 1, transformOrigin: 'bottom center'},'Scene2+=1.4')
            .to('.seq', {duration: .6, backgroundPosition:'0px -3250px', ease:'steps(13)', yoyo: true, repeat: 1, repeatDelay: .2},'Scene2+=1.6')

            .add('Scene3','Scene2+=2.5')
            .to('.f2', {duration: 0.5, opacity:0, ease:'none'},'Scene3')
            .from('.prod', {duration: 0.8, y: -600, rotation: 10, ease: 'power2.in'}, 'Scene3')  
            .to('.prod', {duration: 0.2, scaleY: .98, scaleX: 1.02, yoyo: true, repeat: 1}, 'Scene3+=0.8')
            .to('.prod', {duration: 0.2, y: -8, rotation: -2, yoyo: true, repeat: 1, ease: 'power1.out'}, 'Scene3+=0.8')

            .from('.text3',{duration:0.8, opacity: 0, y: 8, ease:'power1.out'},'Scene3+=.7')
            .from('.ctatext,.ctaarrow', {duration:0.8, opacity: 0, ease: 'power1.out'}, 'Scene3+=1.3')
            .to('.ctaarrow', {duration:0.6, x: 3, repeat:1, yoyo:true, ease: 'power1.inOut'}, 'Scene3+=1.8')
            .from('.legal', {duration:0.8, opacity: 0, ease: 'power1.out'}, 'Scene3+=1.5')
 
            .add(hoverFunction,'Scene3+=2.5')
        
//        tl.seek('Scene2')
        //-------------------------------------
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
        $('#clickthru').on('mouseenter', function() {
            gsap.to('.ctaarrow',{duration:0.6, x:3, repeat:1, yoyo:true, ease: 'power1.inOut', overwrite:'auto'});
        });
        $('#clickthru').on('mouseleave', function() {
            gsap.to('.ctaarrow',{duration:0.6, x:0, ease: 'power1.inOut', overwrite:'auto'});
        });
    }
//-------------------------------------
