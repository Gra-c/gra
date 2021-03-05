let images;
let ja;
let shots = new Set()
let foes = new Set()
let dlugosc = 0;
let pocisk;
let wynik = 0;
let respawnCzas = 80;
let i = 0;

function setup()
{
    var screen = createCanvas(400,600);
    Entity.prototype.velocity = createVector(0,0);
    ja = new Player(createVector(200,550))
    poc = new Bullet(createVector(300,300))
    for(let i = 40;i <400;i = i+40)
    {
            foes.add(new Enemy(createVector(i,200))) 
    }
}
function preload()
{
    Entity.prototype.image = loadImage("images/t1.jpg");
    Player.prototype.image = loadImage("images/player.png");
    Enemy.prototype.image = loadImage("images/enemy.png")
    pocisk = loadImage("images/pocisk.png");
}
function draw()
{
    background(20)
    ja.move();
    ja.draw();
    foes.forEach(function(wrog)
    {
        wrog.draw();
        shots.forEach(function(strzal)
        {
            dlugosc = p5.Vector.mag(p5.Vector.sub(wrog.placement,strzal.placement))
            if(
                dlugosc < 30)
            {
                shots.delete(strzal)
                foes.delete(wrog)
                wynik+=2;
                console.log(wynik)
            }
        })
    })
    shots.forEach(function(value)
    {
        value.move();
        value.draw();
        if(value.placement.y < -30)
        {
            shots.delete(value);
            wynik--;
            console.log(wynik);            
        }
    },)
    if(keyIsDown(32)&&ja.cooldown<=0)
    {
        shots.add(new Bullet(createVector(ja.placement.x + 18,ja.placement.y)),"")
        ja.cooldown = 15
    }
    ja.cooldown--;
    i++;
    if(i > respawnCzas)
    {
        foes.add(new Enemy(createVector(random(20,380),random(30,470))))
        i = 0;
        respawnCzas--;
    }
    if(foes.size>30)
    {
        fill(255)
        textSize(40)
        text("wynik="+wynik,100,300)
        noLoop();
    }
}