var canvas;
var music;
var box;
var surface1, surface2, surface3, surface4;
var edges

function preload(){

    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(1200,600);

    //create 4 different surfaces
    surface1 = createSprite(1100,550,80,20);
    surface1.shapeColor ="pink";

    surface2 = createSprite(900,550,80,20);
    surface2.shapeColor ="lime";

    surface3 = createSprite(700,550,80,20);
    surface3.shapeColor ="yellow";

    surface4 = createSprite(500,550,80,20);
    surface4.shapeColor ="orange";

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,30,30);
    box.velocityX = 3;
    box.velocityY = -3;
    box.shapeColor = "white";


}

function draw() {
    background(169,169,169);

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box)&& box.bouceOff(surface1) ){
        surface1.shapeColor ="pink";
        box.shapeColor ="pink";
        music.play();
    }

    if(surface2.isTouching(box)){
        surface2.shapeColor ="lime";
        box.shapeColor ="lime";
        music.stop();
        box.velocityY = 0;
        box.velocityX = 0;
    }

    if(surface3.isTouching(box)&& box.bouceOff(surface3) ){
        surface3.shapeColor ="yellow";
        box.shapeColor ="yellow";
       
    }

    if(surface4.isTouching(box)&& box.bouceOff(surface4) ){
        surface4.shapeColor ="orange";
        box.shapeColor ="orange";
      
    }


    drawSprites();
}
