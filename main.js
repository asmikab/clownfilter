xnose=0;
ynose=0;
xear=0;
year=0;

function preload(){
  
clownnose=loadImage("https://i.postimg.cc/BbsZmtt4/Clown-nose-large.png");
clownhair=loadImage("https://i.postimg.cc/hG61QRv9/Clown-Hair.png");
}

function setup(){

  canvas=createCanvas(400,400);
  canvas.center();
  camera=createCapture(VIDEO);
  camera.hide();
  camera.size(400,400);
  
  mymodel=ml5.poseNet(camera,modelLoaded);
  mymodel.on("pose",getResult);
  


}

function modelLoaded(){

console.log("your model is loaded");

}
function getResult(result){

if(result.length>0){
   console.log(result);
  xnose=result[0].pose.nose.x-30;
  ynose=result[0].pose.nose.y-30;
  console.log(xnose,ynose);
  xear=result[0].pose.rightEar.x-50;
  year=result[0].pose.rightEar.y-150;
}

}


function draw(){

  image(camera,0,0,400,400);

  image(clownnose,xnose,ynose,65,65);
  image(clownhair,xear,year,190,150);

}

function captureimg(){

  save("clown.png");
  

}