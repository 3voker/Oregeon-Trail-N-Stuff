class Traveler
{
    name;

    food;

    constructor(name)
    {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    Hunt()
    {
        return this.food += 2;
    }

    Eat()
    {
        if(this.food >= 1)
        {
            this.isHealthy = true;
        }
        
        else if(this.food <= 0)
        {
            this.isHealthy = false;      
        }  
        return this.food -= 1;
    }
}