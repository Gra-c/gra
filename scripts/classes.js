function Entity(location)
{
    this.placement = location;
}
Entity.prototype.draw = function()
{
    image(this.image,this.placement.x,this.placement.y)
}
Entity.prototype.move = function()
{
    this.placement.add(this.velocity);
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
}
Player.prototype = Object.create(Entity.prototype)
Player.prototype.constructor = Entity();
Player.prototype.move = function()
{
    if (keyIsDown(37)) 
    {
        ja.teleport(createVector(-1,0));
    }
    
    if (keyIsDown(39))
    {
        ja.teleport(createVector(1,0));
    }

    if (keyIsDown(32))

    {

    }
}
Player.prototype.draw = function()
{
    image(this.image,this.placement.x,this.placement.y)
}
function Bullet(location)
{
    Entity.call(this,location);
    this.addForce(createVector(0,-3));
}
Bullet.prototype.move = function()
{
    
}