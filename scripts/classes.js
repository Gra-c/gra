function Entity(location)
{
    this.placement = location;
    this.velocity = createVector(0,0)
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
    switch(keyCode)
    {
        case LEFT_ARROW: this.teleport(createVector(1,0))
        case RIGHT_ARROW: this.teleport(createVector(-1,0))
    }
}
Player.prototype.draw = function()
{
    image(textures.Player,this.placement.x,this.placement.y)
}