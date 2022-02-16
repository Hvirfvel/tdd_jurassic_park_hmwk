const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function() {
    this.dinosaurs.pop()
}

Park.prototype.findMostPopularDinosaur = function() {
    const values = [];
    for (let dinosaur of this.dinosaurs) {
        values.push(dinosaur.guestsAttractedPerDay)
    }
    const max = Math.max(...values);
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay === max) {
            return dinosaur;
        }
    }
}

Park.prototype.findDinosaursBySpecies = function(species) {
    const dinosaursBySpecies = [];
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosaursBySpecies.push(dinosaur);
        }
    } 
    return dinosaursBySpecies;
}

Park.prototype.visitorsPerDay = function() {
    let total = 0;
    for (let dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.visitorsPerYear = function() {
    return this.visitorsPerDay() * 365;
}

Park.prototype.totalRevenue = function() {
    return this.visitorsPerYear() * this.ticketPrice;
}

module.exports = Park;