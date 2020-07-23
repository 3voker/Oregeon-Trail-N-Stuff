class Wagon
{
    capacity;

    constructor()
    {
        this.capacity = 2;
        this.passengers = [];
    }

    GetAvailableSeatCount(capacity)
    {
        capacity = 2;

        let emptySeats = capacity - this.passengers;

        return emptySeats;
    }

    Join(traveler)
    {
        if(this.passengers)
        {
             this.passengers.push(traveler);
        }
    }

    ShouldQuarantine()
    {
        const quarantinePlease = this.passengers.filter(traveler => traveler.isHealthy === false);

        if(this.isHealthy === false || quarantinePlease)
        {
            return true;
        }
        else if(this.isHealthy === true || quarantinePlease)
        {
            return true;
        }
        
    }

    TotalFood()
    {
        let remainingFood = 0;

        const findFood = this.passengers.find(traveler => traveler.food > 0)
        const foodTotal = Number(this.passengers.forEach(traveler => {remainingFood += traveler.food;}));
                         return remainingFood;
    }

}