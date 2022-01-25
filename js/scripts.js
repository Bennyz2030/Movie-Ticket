// Business Logic

function Tickets(age, movie, time) {
  this.age = age;
  this.movie = movie;
  this.time = time;
  this.price = 0;
}

Tickets.prototype.priceFinder = function() {
  let age = this.age;
  let movie = this.movie;
  let time = this.time;
  if (age<= 12) {
    this.price += 8;
  } else if (age >= 12 && age < 60) {
    this.price += 12;
  } else if (age > 60) {
    this.price += 6;
  }
  if (time === "matinee") {
    this.price -= 2;
  } else if (time === "evening") {
    this.price += 2;
  }
  if (movie === 1) {
    this.price -= 1;
  } else if (movie >= 2 && movie <= 4) {
    this.price += 0;
  } else if (movie === 5) {
    this.price += 10;
  }  
  return this.price;
};