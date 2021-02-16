let images;
let zlol

function setup()
{
    var screen = createCanvas(600,800);
    zlol = new enemy1(createVector(100,100))
}
function preload()
{
    textures= new imgLoader();
}
function draw()
{
    background(255)
    zlol.draw();
    zlol.move();
}