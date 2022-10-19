video="";
objectDetector="";
Status="";
alarm="";
objects="";
function preload(){
    video=createCapture(VIDEO);
    video.hide();
    alarm= loadSound("extreme_alarm.mp3");
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();   
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";     
}

function draw(){
    image(video,0,0,480,380);
    objectDetector.detect(video, gotResult);
    if(objects="person"){
        alarm.stop();
        console.log("seen");
        document.getElementById("status").innerHTML = "Status = Object Detected";  
    }else if(objects=="person"){
        console.log("nothing")
        alarm.play();
        alarm.volume(1);
    }
}


function modelLoaded(){
    console.log("Model LOADED");
    Status=true;
    
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
    
}
