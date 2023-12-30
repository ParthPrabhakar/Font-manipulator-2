function setup(){
    canvas=createCanvas(550,550);
    canvas.position(1500,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    video.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function draw(){
    background("grey");
}
function modelLoaded(){
    console.log("Posenet initialized");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }

}
