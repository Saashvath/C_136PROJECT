storage = "";


function preload(){



}


function draw(){
image(video,0,0,400,400);

}


function setup(){

    canvas = createCanvas(400,400);
    canvas.center();    
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function start(){

    detector = ml5.detector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = " Status Is Detecting Object";
    holder =  document.getElementById("input").innerHTML = " ";
}


function modelLoaded(){

    console.log("Model Has Been Successfully Loaded!");
    Status = true;
}