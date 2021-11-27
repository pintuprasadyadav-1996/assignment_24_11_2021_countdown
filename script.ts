let hh=1;
let mm=29;
let ss=60;
 let id=setInterval(demo,1000)
function demo(){
   document.getElementById("hh").innerHTML=hh+":";
   document.getElementById("mm").innerHTML=mm+":";
   document.getElementById("ss").innerHTML=ss+"";
   ss--;
   if(ss<=0){
     mm--;
     ss=60;
   }
   if(mm<=0){
     hh--;
     mm=59;
   }
   if(hh<0){
     clearInterval(id);
     alert("Ended Your Time!");
   }

  
}