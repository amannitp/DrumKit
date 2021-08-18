
// Detecting by button press

var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){

    var buttonInnerHtml=this.innerHTML;
    //soundOfDrum(buttonInnerHtml);

    switch(buttonInnerHtml){
     case "w":
        var audio = new Audio('audios/tom-1.mp3');
        audio.play();
        break;
     case "a":
        var audio = new Audio('audios/tom-2.mp3');
        audio.play();
        break;
     case "s":
        var audio = new Audio('audios/tom-3.mp3');
        audio.play();
        break;
     case "d":
        var audio = new Audio('audios/tom-4.mp3');
        audio.play();
        break;
     case "j":
        var audio = new Audio('audios/crash.mp3');
        audio.play();
        break;
     case "k":
        var audio = new Audio('audios/snare.mp3');
        audio.play();
        break;
     case "l":
        var audio = new Audio('audios/kick-bass.mp3');
        audio.play();
        break;

     default:
    }
 });

}


// detecting by key press

document.addEventListener("keypress",function (e){
    soundOfDrum(e.key);
    console.log("event",e)
    

})

function soundOfDrum(key){
    switch(key){
        case "w":
           var audio = new Audio('audios/tom-1.mp3');
           audio.play();
           break;
        case "a":
           var audio = new Audio('audios/tom-2.mp3');
           audio.play();
           break;
        case "s":
           var audio = new Audio('audios/tom-3.mp3');
           audio.play();
           break;
        case "d":
           var audio = new Audio('audios/tom-4.mp3');
           audio.play();
           break;
        case "j":
           var audio = new Audio('audios/crash.mp3');
           audio.play();
           break;
        case "k":
           var audio = new Audio('audios/snare.mp3');
           audio.play();
           break;
        case "l":
           var audio = new Audio('audios/kick-bass.mp3');
           audio.play();
           break;
   
        default:
       }

}
