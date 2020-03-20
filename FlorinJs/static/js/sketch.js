let backGround;
let bird;
let birdImage;
let startButton;
let groundImage;
let pipes = [];
let pipeTop;
let pipeBottom;
let cnv;
let div;


function preload(){
    birdImage = loadImage('static/images/bird.png');
    groundImage = loadImage('static/images/ground.png');
    pipeTop = loadImage('static/images/pipeNorth.png');
    pipeBottom = loadImage('static/images/pipeBottom.png');
    startButton = loadImage('static/images/startButton.png')

}


function setup(){
    div = document.querySelector('div[id="container"]');
    cnv = createCanvas(450,600);
    cnv.parent('container')
    cnv.width = 470;
    // cnv.position (width*1.1, height/10);
    backGround = loadImage('static/images/sky.png');
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw(){
    background(backGround);
    image(groundImage,-1,490)
    death=true;
    if (death == false) {



    for (let i = pipes.length-1 ; i >= 0; i-- ){
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].offScreen()) {
            pipes.splice(i,1);
        }

        if (pipes[i].hits(bird)) {
            bird.death();
            setTimeout(() => {noLoop()}, (countSeconds* 1000-345));
        }

    }



    bird.update();

    if (frameCount % 200 == 0) {
       pipes.push(new Pipe());
    }
    }
    image(startButton, width/2 , height/2);
    cnv.addEventListener('click', function(){
        death=false;
    });
    bird.show();

}

function keyPressed() {
    if (key === " "){
        bird.up();
    }
}


