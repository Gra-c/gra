let images;
let ja;

function setup()
{
    var screen = createCanvas(600,800);
    ja = new Player(createVector(100,100))
    Entity.prototype.
    Player.prototype.speed = createVector()
}
function preload()
{
    Entity.prototype.image = loadImage("images/t1.jpg");
    Player.prototype.image = loadImage("images/enemy.png");
}
function draw()
{
    background(255)
    ja.move();
    ja.draw();
}