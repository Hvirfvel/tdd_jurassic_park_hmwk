const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 9);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('brontosaurus', 'herbivore', 25);
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 9)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurs, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    assert.deepStrictEqual(park.dinosaurs.length, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur);
    park.removeDinosaur();
    assert.deepStrictEqual(park.dinosaurs.length, 0)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual(park.findMostPopularDinosaur(), dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual(park.findDinosaursBySpecies('herbivore'), [dinosaur2])
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
