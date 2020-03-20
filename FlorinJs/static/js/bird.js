let death;
let countSeconds;
function Bird(){
    this.y = height/2;
    this.x = 150;
    countSeconds = 0;

    this.velocity = 0;
    this.gravity = -0.6;
    this.lift = -6.5;

    this.death = function() {
        if (this.y < 488 ){
            countSeconds +=1
        } else {
            return countSeconds
        }
        this.velocity += this.gravity;
        this.velocity += 6;
        this.y += this.velocity;
        death = true;

    };

    this.show = function () {
        birdImage.resize(50,0);
        image(birdImage,this.x,this.y);

    };

    this.up = function (){
        if (!death){
            this.velocity += this.lift;
        } else {

        }
    };

    this.update = function (){
        this.velocity += this.gravity;
        this.velocity += 1;
        this.y += this.velocity;

        if (this.y > (height-140.5)) {
            this.velocity= 0;
            this.y = height-140.5;
        }
        if (this.y < 40) {
            this.velocity= 0;
            this.y = 40;
        }
    };
}
