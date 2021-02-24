let images;
let ja;
let shots = new Set()

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
    shots.forEach(function(value)
    {
        value.move();
        value.draw();
        if(value.placement.y < -30)
        {
            shots.delete(value);
        }
    },)
    if(keyIsDown(32)&&ja.cooldown<=0)
    {
        shots.add(new Bullet(createVector(ja.placement.x,ja.placement.y)),"")
        ja.cooldown = 15
    }
    ja.cooldown--;
}
