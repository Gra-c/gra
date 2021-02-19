let images;
let ja;

function setup()
{
    var screen = createCanvas(400,600);
    Entity.prototype.velocity = createVector(0,0);
    ja = new Player(createVector(200,550))
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
