const canvas = document.getElementsByClassName("canvas")[0];
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const scale = 600;
const rows = canvas.height / scale;
const column = canvas.width / scale;

var car;

(function setup() {
    car = new Car();
    car.draw();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        car.draw();
        car.update();
    }, 20);
}());


window.addEventListener('keydown', (evt) => {
    const direction = evt.key.replace('Arrow', '');
    console.log(direction)
    car.changeDirection(direction);
});