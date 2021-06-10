//IMPORTS
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import {CustomEase} from "gsap/CustomEase";
import {CustomWiggle} from "gsap/CustomWiggle";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";


//register Plugins
gsap.registerPlugin( MorphSVGPlugin, DrawSVGPlugin, CustomWiggle, CustomEase, MotionPathPlugin);

//**** SELECT ELEMENTS without jQuery ****\\

let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  let mainTL = gsap.timeline({id:"main"});
  let PERC = {num:0};
  let PERC_num = document.querySelector("#number tspan");

  function init(){

    CustomWiggle.create("myWiggle", {wiggles: 25, type:"easeInOut"});

  }

  function countUpNumbers() {

    var tl = gsap.timeline();
    tl.to(PERC, {duration:2, num:"+=40", roundProps:"num", onUpdate:percentHandler, ease:"expo"})

    ;

    return tl;

  }

  function percentHandler(){

    PERC_num.textContent=PERC.num;
  }

  //Nested Timelines

    //*********** logoTL ****************
  function logoTL(){
      let tl = gsap.timeline();

      gsap.set ("#le-stroke, #xus-stroke, #logo-stroke", {transformOrigin:"center center"})
   
      tl.from ("#le-stroke, #xus-stroke, #logo-stroke", {duration:1, ease:"none", drawSVG: 0})
      .to ("#le-stroke, #xus-stroke, #logo-stroke", {duration:1, ease:"none" })
      .from ("#logo-shape, #le, #xus ", {duration:1, alpha:0})
      .to ("#lexus", {duration:1, delay:0.5, scale:0, transformOrigin:"center"})
    
      ;//tl END
  
      return tl;
  
    }

  //***********  speedometerTL  ****************
  function speedometerTL(){
    let tl = gsap.timeline();

    gsap.set ("#speedometer-circle", {transformOrigin:"10% 90%"})

    tl.from ("#speedometer-circle", {duration:0.5, ease:"none", drawSVG: 0})
    .to ("#speedometer-circle", {duration:0.5, ease:"none" })
    .from ("#number, #mph", {duration:0.5, alpha:0})
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
    .to ("#tick-2", {duration:0.5, scale:3, fill: "#065EB1", transformOrigin:"center" })
  
    .from ("#fuel-gauge" ,{duration:0.5, alpha:0}, "ef")
    .from ("#E" ,{duration:0.5, alpha:0}, "ef")
    .from ("#F" ,{duration:0.5, alpha:0}, "ef")
    .from ("#Rectangle", {duration:0.5, x:"-=120"})

    ;//tl END

    return tl;
  }

    //*********** fuelTL ****************
  // function fuelTL(){
  //     let tl = gsap.timeline();
      
  //     tl.from ("#fuel-gauge" ,{duration:0.5, alpha:0}, "ef")
  //     .from ("#E" ,{duration:0.5, alpha:0}, "ef")
  //     .from ("#F" ,{duration:0.5, alpha:0}, "ef")
  //     .from ("#Rectangle", {duration:0.5, x:"-=120"})
  //     ;//tl END
  
  //     return tl;
  
  //   }

  //*********** mapTL ****************
  function mapTL(){
    let tl = gsap.timeline();

    gsap.set ("#map-circle", {transformOrigin:"center"})
    gsap.set ("#Line, #Line-2,#Line-3,#Line-4,#Line-5,#Line-6,#Line-7,#Line-8,#Line-9,#Line-10,#Line-11,#Line-12,#Line-13", {transformOrigin: "bottom"})

    tl.from ("#map-circle", {duration:0.5, ease:"none", drawSVG: 0})
      .to ("#map-circle", {duration:0.5, ease:"none" })
        

    .from ("#Line, #Line-2,#Line-3,#Line-4,#Line-5,#Line-6,#Line-7,#Line-8,#Line-9,#Line-10,#Line-11,#Line-12,#Line-13", {duration:0.5, ease:"none", drawSVG: 0})
    .to ("#Line, #Line-2,#Line-3,#Line-4,#Line-5,#Line-6,#Line-7,#Line-8,#Line-9,#Line-10,#Line-11,#Line-12,#Line-13", {duration:0.5, ease:"none"}, "map")

    .from ("#navigation-icon", {duration:1, alpha:0, scale:4, transformOrigin:"center"}, "map")
    .from ("#P", {duration:0.5, alpha:0, x:"-=50"}, "prnd")
    .from ("#R", {duration:0.5, delay:0.1, alpha:0, x:"-=50"}, "prnd")
    .from ("#N", {duration:0.5, delay:0.2, alpha:0, x:"-=50"}, "prnd")
    .from ("#D", {duration:0.5, delay:0.3, alpha:0, x:"-=50"}, "prnd")
    .to ("#D", {scale:1.5, duration: 0.5, fill: "#065EB1"})
    .to ("#navigation-icon", {
      duration:3,
      ease:"none",
      motionPath: {
        path:"#driving",
        align:"#driving",
        alignOrigin: [0.5, 0.5]
      }
     }, "drive")
    .to ("#D", {scale:1, duration: 0.5, delay:2.5, fill: "#ffffff"}, "drive")
    .to ("#P", {scale:1.5, duration: 0.5, delay:3, fill: "#065EB1"}, "drive")
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

    // gsap.set ("#music", {display:"none"})

    tl.from ("#album-cover", {duration:1, alpha:0})
      // gsap.set ("#play-button", {display:"none"})

      tl.from ("#lemon", {duration:0.5, alpha:0})
      .from ("#backward-button", {duration:0.5, alpha:0, x:"+=20"}, "buttons")
      .from ("#forward-button", {duration:0.5, alpha:0, x:"-=20"}, "buttons")
      .from ("#pause-button", {duration:0.5, alpha:0}, "buttons")
      .from ("#upnext", {duration:0.5, alpha:0, y:"-=20"}, "song")
      .from ("#song-2", {duration:0.5, alpha:0, x:"-=20"}, "song")
      .from ("#NavillerabyG-friend", {duration:0.5, delay:0.3, alpha:0, x:"-=20"}, "song")
      .from ("#music-timestamp", {duration:0.5, alpha:0, transformOrigin:"left"}, "song")
      .to ("#music-time-bar", {duration:6, scaleX:10, ease:"none", transformOrigin:"left"})
      .to ("#pause-button", {duration:0.5, morphSVG: "#play-button"}, "pause")

      tl.from ("#phone", {duration:1.5, x:"+=700", ease:"power2.out"}, "pause")
      .to ("#phone", {duration:3, x:"+=15", ease:"myWiggle"})
      .to ("#phone", {duration:3, x:"+=15", ease:"myWiggle"})
      .to ("#phone", {duration:1.5, x:"+=700", ease:"power2.out"})

      // .to ("#play-button", {duration:0.5, morphSVG:"#pause-button2"})
      // .to ("#music-time-bar", {duration:6, scaleX:10, ease:"none"})
   
     
    ;//tl END

    return tl;

  }

  // *********** phoneTL ****************
  // function phoneTL(){
  //   let tl = gsap.timeline();

  //   tl.from ("#phone", {duration:1.5, x:"+=700", ease:"power2.out"}, "pause")
  //     .to ("#phone", {duration:3, x:"+=15", ease:"myWiggle"})
  //     .to ("#phone", {duration:3, x:"+=15", ease:"myWiggle"})
  //     .to ("#phone", {duration:1.5, x:"+=700", ease:"power2.out"})

  //     .to ("#play-button", {duration:0.5, morphSVG:"#pause-button2"}, "continue")
  //     .to ("#music-time-bar", {duration:6, scaleX:10, ease:"none"}, "continue")
      
     
 
  //   // ; tl END

  //   return tl;

  // }

//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(logoTL())
      .add(speedometerTL(), "begin")
      .add(countUpNumbers())
      // .add(fuelTL())
      .add(mapTL(), "begin")
      .add(otherTL(), "begin")
      .add(musicTL(), "begin")
      // .add(phoneTL())


;//tl END





});//ready END
