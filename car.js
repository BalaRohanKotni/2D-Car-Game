function Car() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 6;
    this.ySpeed = 0;

    this.carImage = new Image();
    this.carImage.src = 'tesla-car-right.png';

    this.draw = function () {
        // ctx.fillStyle = "#ffffff"
        // ctx.fillRect(this.x, this.y, scale, scale)
        if (this.x > (canvas.width - 200)) {
            console.log(this.x)
            this.x = canvas.width - 200
        }
        ctx.drawImage(this.carImage, this.x, this.y);
    }

    this.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    this.changeDirection = function (direction) {
        console.log(direction)
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                this.carImage.src = 'tesla-car-up.png';
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                this.carImage.src = 'tesla-car-down.png';
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                this.carImage.src = 'tesla-car-left.png';
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                this.carImage.src = 'tesla-car-right.png';
                break;
        }
    }
}