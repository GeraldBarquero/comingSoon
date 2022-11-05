
(function ($) {
    "use strict";
    var svg = document.getElementById("scottie");
    var s = Snap(svg);

    var path = Snap.select('.tail');
    var head = Snap.select('.head');
    var leftEar = Snap.select('.left-ear');
    var rightEar = Snap.select('.right-ear');
    var eyelid = Snap.select('.eyelid');

    animatePath(); // start loop
    rotateHead();
    rotateRightEar();
    rotateLeftEar();
    blink();
    function blink(){
      setTimeout(function () {
    	  eyelid.animate({ d: "M120.11 49.173l17.65-11.56 12.075 18.438-17.652 11.56z" }, 150, mina.easeinout, endBlink);
      }, 3000);
    }
    function endBlink(){
    	eyelid.animate({ d: "M120.1 49.182l17.65-11.56 1.393 2.125-17.652 11.56z" }, 150, mina.easeinout, blink);
    }
    
    function animatePath(){
    	path.animate({ d: "M45.5 199.38l.22 15s-39.72-.8-23.6-40.3c3.5-1.28-7 32.75 18.13 26.63a32 32 0 0 1 5.25-1.33z" }, 150,  resetPath);
    }

    function resetPath(){
    	path.animate({ d: "M45.5 199.31l.22 15S10.5 217.71 0 182.42c3.5-1.28 10.5 24.59 40.25 18.22a32 32 0 0 1 5.25-1.33z" }, 150,  animatePath);
    }

    function rotateHead(){
      setTimeout(function () {
    	  head.animate({ transform: 'r2,110,100' }, 400, mina.easeinout,  resetHead );
      }, 4000);
    }
    function resetHead(){
      setTimeout(function () {
    	  head.animate({ transform: 'r0,110,100' }, 850, mina.easeinout,  rotateHead );
      }, 5650);
    }
    function rotateRightEar(){
      setTimeout(function () {
    	  rightEar.animate({ transform: 'r20,108,67' }, 300, mina.elastic,  twitchStart );
      }, 4000);
      
    }
    function twitchStart(){
      setTimeout(function () {
    	  rightEar.animate({ transform: 'r0,108,67' }, 200, mina.easein,  twitchEnd );
      }, 1500);
      
    }
    function twitchEnd(){
      setTimeout(function () {
    	  rightEar.animate({ transform: 'r25,108,67' }, 100, mina.elastic,  resetRightEar );
      }, 50);
      
    }
    function resetRightEar(){
      setTimeout(function () {
    	  rightEar.animate({ transform: 'r-15,108,67' }, 800, mina.easeout,  rotateRightEar );
        }, 4000);
    }

    function rotateLeftEar(){
      setTimeout(function () {
    	  leftEar.animate({ transform: 'r0,114,54' }, 150, mina.easein,  resetLeftEar );
        }, 4000);
    }
    function resetLeftEar(){
      setTimeout(function () {
    	  leftEar.animate({ transform: 'r-25,114,54' }, 850, mina.easeout,  rotateLeftEar );
       }, 6000);
    }


    
    
    /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function(){
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if(nowSlide >= itemSlide.length) {nowSlide = 0;}

        setInterval(function(){
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if(nowSlide >= itemSlide.length) {nowSlide = 0;}
        },delay);
    });
	
	const rollSound = new Audio("./audio/dog.wav");
  $('#scottie').click(e => rollSound.play());

  $('.cd100').countdown100({
    /*Set Endtime here*/
    /*Endtime must be > current time*/
    endtimeYear: 2019,
    endtimeMonth: 4,
    endtimeDate: 30,
    endtimeHours: 15,
    endtimeMinutes: 0,
    endtimeSeconds: 0,
    timeZone: "America/Costa_Rica"
    // ex:  timeZone: "America/New_York"
    //go to " http://momentjs.com/timezone/ " to get timezone
  });
  
  $('.js-tilt').tilt({
    scale: 1.1
  })
	


})(jQuery);