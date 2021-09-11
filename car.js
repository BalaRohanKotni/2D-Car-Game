function Car() {
    this.x = 0;
    this.y = 0;

    let arbitrarySpeed = 3;

    this.xSpeed = arbitrarySpeed;
    this.ySpeed = 0;

    this.carImage = new Image();
    this.carImage.src = 'car-right.png';

    this.draw = function () {
        // ctx.fillStyle = "#ffffff"
        // ctx.fillRect(this.x, this.y, scale, scale)
        if (this.x > canvas.width) {
            console.log(this.x)
            this.x = 0 - 200
        }
        if (this.y > canvas.height) {
            console.log(this.x)
            this.y = 0 - 200
        }

        if (this.x < 0 - 200) {
            console.log(this.x)
            this.x = canvas.width
        }
        if (this.y < 0 - 200) {
            console.log(this.y)
            this.y = canvas.height
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
                this.ySpeed = -arbitrarySpeed;
                this.carImage.src = 'car-up.png';
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = arbitrarySpeed;
                this.carImage.src = 'car-down.png';
                break;
            case 'Left':
                this.xSpeed = -arbitrarySpeed;
                this.ySpeed = 0;
                this.carImage.src = 'car-left.png';
                break;
            case 'Right':
                this.xSpeed = arbitrarySpeed;
                this.ySpeed = 0;
                this.carImage.src = 'car-right.png';
                break;
            case 'Enter':
                this.xSpeed = 0;
                this.ySpeed = 0;
                break;
        }
    }
}