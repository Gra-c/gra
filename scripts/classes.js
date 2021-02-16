function imgLoader()
{
    this.enemy = loadImage("images/t1.jpg");
}
function enemy1(location)
{
    this.placement = location;
    this.velocity = createVector(0.1,0.05)
    this.draw = function()
    {
        image(textures.enemy,this.placement.x,this.placement.y)
    }
    this.move = function()
    {
        this.placement.add(this.velocity);
    }
    this.addForce = function(force)
    {
        this.velocity.add(force);
    }
    this.bounce = function(side)
    {
        let multi = createVector(1,1);
        switch(side)
        {
            case "up": multi.y = -1;break;
            case "down": multi.y = -1;break;
            case "left": multi.x = -1;break;
            case "right": multi.x = -1;break;
        }
        this.velocity.mult(multi)
    }
}