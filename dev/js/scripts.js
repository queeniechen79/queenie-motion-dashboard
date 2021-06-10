//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {CustomEase} from "gsap/CustomEase";
import {CustomWiggle} from "gsap/CustomWiggle";


//register Plugins
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, CustomWiggle, CustomEase);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");
//example:
//let someBox = document.querySelector("#box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});

  function init(){
    //***********  fadeInTL init ****************
    CustomWiggle.create("myWiggle", {wiggles: 25, type:"easeInOut"});
    //*********** zoomTL init ****************
    
    //*********** spaceshipTL init ****************

    //*********** liftOffTL init ****************


    //*********** flightTL init ****************
    // gsap.set("#space-ship", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
    //*********** moonLandingTL init ****************


  }

  //Nested Timelines

    //*********** logoTL ****************
  function logoTL(){
      let tl = gsap.timeline();

      tl.from ("#lexus", {duration:2, alpha:0})
        .to ("#lexus", {duration:1, scale:0, transformOrigin:"center"})
    
      ;//tl END
  
      return tl;
  
    }

  //***********  speedometerTL  ****************
  function speedometerTL(){
    let tl = gsap.timeline();

    gsap.set ("#speedometer-circle", {transformOrigin:"10% 90%"})

    tl.from ("#speedometer-circle", {duration:0.5, ease:"none", drawSVG: 0})
    .to ("#speedometer-circle", {duration:0.5, ease:"none" })
    .from ("#tick-1" ,{duration:0.1, alpha:0})
    .from ("#tick-2" ,{duration:0.1, alpha:0})
    .from ("#tick-3" ,{duration:0.1, alpha:0})
    .from ("#tick-4" ,{duration:0.1, alpha:0})
    .from ("#tick-5" ,{duration:0.1, alpha:0})
    .from ("#tick-6" ,{duration:0.1, alpha:0})
    .from ("#tick-7" ,{duration:0.1, alpha:0})
    .from ("#tick-8" ,{duration:0.1, alpha:0})
    .from ("#tick-9" ,{duration:0.1, alpha:0})
    .from ("#tick-10" ,{duration:0.1, alpha:0})
    .from ("#tick-11" ,{duration:0.1, alpha:0})
    .from ("#tick-12" ,{duration:0.1, alpha:0})


    ;//tl END

    return tl;

  }

  var counterSpeed = 50;

  // Set this number you want your counter to count up to. Default is 20
  var topSpeed = 40;
  
  // If yu don't want your speed to start at 0, change it here. Default is 0.
  var speedNumber = 0;
  
  var myVar = setInterval(speedCounter, counterSpeed);
  
  function speedCounter() {
  
    if (speedNumber < topSpeed) {
      speedNumber++;
      document.getElementById("speed-tag").innerHTML = speedNumber;
    } else {
      clearInterval(myVar);
    }

  
    return speedNumber;
  }

    //*********** fuelTL ****************
  function fuelTL(){
      let tl = gsap.timeline();
      tl.from ("#fuel-gauge" ,{duration:0.5, alpha:0})
      .from ("#E" ,{duration:0.5, alpha:0}, "ef")
      .from ("#F" ,{duration:0.5, alpha:0}, "ef")
      .from ("#fuel-bar", {duration:0.5, scale:0 })
      .to ("#fuel-shape", {duration:0.5, x:"+=60"})
      ;//tl END
  
      return tl;
  
    }

  //*********** mapTL ****************
  function mapTL(){
    let tl = gsap.timeline();

    gsap.set ("#map-circle", {transformOrigin:"center"})
    gsap.set ("#Line, #Line-2,#Line-3,#Line-4,#Line-5,#Line-6,#Line-7,#Line-8,#Line-9,#Line-10,#Line-11,#Line-12,#Line-13", {transformOrigin: "bottom"})

    tl.from ("#map-circle", {duration:0.5, ease:"none", drawSVG: 0})
      .to ("#map-circle", {duration:0.5, ease:"none" })
        
    // .from ("#map-lines", {duration:1, ease:"none", drawSVG: 0})
    // .to ("#map-lines", {duration:1, ease:"none"})

    .from ("#Line, #Line-2,#Line-3,#Line-4,#Line-5,#Line-6,#Line-7,#Line-8,#Line-9,#Line-10,#Line-11,#Line-12,#Line-13", {duration:1, ease:"none", drawSVG: 0})
    .to ("#Line, #Line-2,#Line-3,#Line-4,#Line-5,#Line-6,#Line-7,#Line-8,#Line-9,#Line-10,#Line-11,#Line-12,#Line-13", {duration:1, ease:"none"}, "map")

    .from ("#navigation-icon", {duration:1, alpha:0, delay:0.5}, "map")
    .from ("#P", {duration:0.5, alpha:0, x:"-=50"}, "prnd")
    .from ("#R", {duration:0.5, delay:0.1, alpha:0, x:"-=50"}, "prnd")
    .from ("#N", {duration:0.5, delay:0.2, alpha:0, x:"-=50"}, "prnd")
    .from ("#D", {duration:0.5, delay:0.3, alpha:0, x:"-=50"}, "prnd")
    .to ("#P", {scale:1.5, duration: 0.5, fill: "#065EB1"})
    ;//tl END

    return tl;

  }

//*********** otherTL ****************

  function otherTL(){
    let tl = gsap.timeline();

    tl.from ("#MAY30", {duration:0.5, alpha:0, y:"+=20"})
      .from ("#Cloudy", {duration:0.5, alpha:0, x:"-=20"}, "other")
      .from ("#weather", {duration:0.5, alpha:0, x:"-=20"}, "other")
      .from ("#time", {duration:0.5, alpha:0, x:"-=20"}, "other")
   
    ;//tl END

    return tl;

  }

  //*********** musicTL ****************
  function musicTL(){
    let tl = gsap.timeline();

    tl.from ("#album-cover", {duration:1, alpha:0})
      gsap.set ("#play-button", {display:"none"})
      .from ("#lemon", {duration:0.5, alpha:0})
      .to ("#music-time-bar", {duration:3, scaleX:4})
      .from ("#upnext", {duration:0.5, alpha:0, y:"-=20"})
      .from ("#song-2", {duration:0.5, alpha:0, x:"-=20"})
      .from ("#NavillerabyG-friend", {duration:0.5, alpha:0, x:"-=20"})

     
   
     
    ;//tl END

    return tl;

  }

  //*********** phoneTL ****************
  // function phoneTL(){
  //   let tl = gsap.timeline();

  //   tl.from ("#phone", {duration:1.5, x:"+=700", ease:"power2.out"})
  //     .to ("#phone", {duration:3, x:"+=15", ease:"myWiggle"})
  //     .to ("#phone", {duration:1.5, x:"+=700", ease:"power2.out"})
     
 
    //; tl END

  //   return tl;

  // }

//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(logoTL())
      .add(speedometerTL())
      .add(speedCounter())
      .add(fuelTL())
      .add(mapTL())
      .add(otherTL())
      .add(musicTL())
      // .add(phoneTL())


;//tl END





});//ready END
