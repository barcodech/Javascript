class Animals{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}


class Dog extends Animals {
  constructor(name,age,runspeed){
    super(name,age);
    this.runspeed = runspeed;
  }
}

class Fish extends Animals{
  constructor(name,age,swimspeed){
    super(name,age);
    this.swimspeed = swimspeed;
  }
}

class Bird extends Animals{
  constructor(name,age,flyspeed){
    super(name,age);
    this.flyspeed = flyspeed;
  }
}

const dog = new Dog("dog",1,"20 km/hr");
const fish = new Fish("fish",2,"40 km/hr");
const bird = new Bird("bird",3,"60 km/hr");

console.log(dog.name);
console.log(dog.age);
console.log(dog.runspeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);

console.log(bird.name);
console.log(bird.age);
console.log(bird.flyspeed);