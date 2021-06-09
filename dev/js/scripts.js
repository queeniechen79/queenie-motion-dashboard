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
        .to ("#lexus", {duration:1.5, y:"+=1000"})
    
      ;//tl END
  
      return tl;
  
    }

  //***********  speedometerTL  ****************
  function speedometerTL(){
    let tl = gsap.timeline();
    gsap.set ("#speedometer-circle", {transformOrigin:"center center"})

    tl.from ("#speedometer-circle", {duration:1, ease:"none", drawSVG: 0})
    .to ("#speedometer-circle", {duration:1, ease:"none" })
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
    .from ("#fuel-gauge" ,{duration:0.5, alpha:0})
    .from ("#E" ,{duration:0.5, alpha:0}, "ef")
    .from ("#F" ,{duration:0.5, alpha:0}, "ef")
    .from ("#fuel-bar", {duration:0.5, scale:0 })


    ;//tl END

    return tl;

  }

  var counterSpeed = 100;

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

  //*********** mapTL ****************
  // function mapTL(){
  //   let tl = gsap.timeline();
  //     gsap.set ("#map-circle", {drawSVG: "0%"})
  //     gsap.set ("#map-lines", {drawSVG: "0%"})
  //     tl.from ("#map-circle", {duration:1, ease:"power2.out", drawSVG: "0%"})
  //     tl.from ("#map-lines", {duration:1, ease:"power2.out", drawSVG: "0%"})
  //       .from ("#navigation-icon", {duration:1, alpha:0})
  //       .from ("#p", {duration:0.5, alpha:0, x:"-=50"})
  //       .from ("#r", {duration:0.5, alpha:0, x:"-=50"})
  //       .from ("#n", {duration:0.5, alpha:0, x:"-=50"})
  //       .from ("#d", {duration:0.5, alpha:0, x:"-=50"})
  //       .to ("#p", {scale:1.5, duration: 0.5, color: "065EB1"})
  //   ;//tl END

  //   return tl;

  // }

//*********** otherTL ****************

  // function otherTL(){
  //   let tl = gsap.timeline();

  //   tl.from ("#other", {duration:1, alpha:0}, "bottom")
   
  //   ;//tl END

  //   return tl;

  // }

  //*********** musicTL ****************
  // function musicTL(){
  //   let tl = gsap.timeline();

  //   tl.from ("#music", {duration:1, alpha:0}, "bottom")
  //     gsap.set ("#play-button", {display:"none"})
  //     .to ("#music-time-bar", {duration:3, scaleX:4}, "music")
  //     .to ("#Lemon-by-Kenshi-Yone", {duration:3, x:"+=15"}, "music")
   
     
  //   ;//tl END

  //   return tl;

  // }

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
      // .add(mapTL())
      // .add(otherTL())
      // .add(musicTL())
      // .add(phoneTL())


;//tl END





});//ready END
