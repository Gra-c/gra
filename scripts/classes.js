function Entity(location)
{
    this.placement = location;
}
Entity.prototype.addForce = function(force)
{
    this.velocity.add(force);
}
Entity.prototype.teleport = function(vector)
{
    this.placement.add(vector);
}
function Player(location)
{
    Entity.call(this,location)
    this.cooldown = 0;
}
Player.prototype = Object.create(Entity.prototype)
Player.prototype.constructor = Entity();
Player.prototype.move = function()
{
    if (keyIsDown(37)) 
    {
        this.teleport(createVector(-1,0));
    }
    if (keyIsDown(39))
    {
        this.teleport(createVector(1,0));
    }
}
Player.prototype.draw = function()
{
    image(this.image,this.placement.x,this.placement.y)
}
function Bullet(location,direction)
{
    Entity.call(this,location);
    if(direction = "up")
    this.velocity = createVector(0,-4);
    else
    this.velocity = createVector(0,4)
    this.image = pocisk;
}
Bullet.prototype = Object.create(Entity.prototype)
Bullet.prototype.constructor = Entity();
Bullet.prototype.move = function()
{
    this.placement.add(this.velocity);
}
Bullet.prototype.draw = function()
{
    image(this.image,this.placement.x,this.placement.y)
}
function Enemy(location)
{
    Entity.call(this,location)
    this.boom = false;
}
Enemy.prototype = Object.create(Entity.prototype)
Enemy.prototype.constructor = Entity();
Enemy.prototype.move = function()
{

}
Enemy.prototype.draw = function()
{
    if(this.boom)
    {
        image(this.boom,this.placement.x,this.placement.y)
    }
    else
    {
        image(this.image,this.placement.x,this.placement.y)
    }
}