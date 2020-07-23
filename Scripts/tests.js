let wagon = new Wagon(2)
// Create three travelers
let henrietta = new Traveler('Henrietta')
let juan = new Traveler('Juan')
let maude = new Traveler('Maude')
console.log(`Wagon Seat Count?: ${ wagon.GetAvailableSeatCount() } – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`)
wagon.Join(henrietta)
console.log(`Wagon Seat Count?: ${ wagon.GetAvailableSeatCount() } – EXPECTED: 1. Henrietta just joined.`)
wagon.Join(juan)
wagon.Join(maude)  // There is no room for her!
console.log(`Wagon Seat Count?: ${ wagon.GetAvailableSeatCount() } – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`)
henrietta.Hunt()   // Henrietta goes in search of food.
juan.Eat()         // Juan eats – as Juan does. 🤣
juan.Eat()         // Juan has run out of food!
console.log(juan)
console.log(`Wagon Should Quarantine?: ${ wagon.ShouldQuarantine() } – EXPECTED: true. Juan has run out of food and become unhealthy!`)
console.log(`Wagon's Total Food?: ${ wagon.TotalFood() } – EXPECTED: 3.`)