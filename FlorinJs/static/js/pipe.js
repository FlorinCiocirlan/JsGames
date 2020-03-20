let score;

function Pipe(){

    this.top = random(random(40, 120),height/2-110);
    this.bottom = random(100,height/2);
    this.x = width-60;
    this.w = 80;
    this.speed = 2;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height-this.bottom-108.3){
            if (bird.x > this.x-1 && bird.x < this.x + this.w){
                return true;
            }
        } else {
            return false;
        }
    };


    this.show = function(){
        image(pipeTop,this.x,0, this.w, this.top);
        image(pipeBottom,this.x, height-this.bottom-108.3, this.w, this.bottom);
    };

    this.update = function() {
        if (death == false){

        this.x -= this.speed;
        }
    }

    this.offScreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }

}