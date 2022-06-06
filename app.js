class Animal{

  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`)
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`)
  }
}


class Dog extends Animal{
  name = "dog";

  run(){
    console.log(`This ${this.name} is running`)
  }
  
}

class Fish extends Animal{
  name = "fish";

  swim(){
    console.log(`This ${this.name} is swimming`)
  }
 
}

class Bird extends Animal{
  name = "bird";

  fly(){
    console.log(`This ${this.name} is flying`)
  }
 
}


const dog = new Dog();
const fish = new Fish();
const bird = new Bird();

console.log(dog.name);
console.log(dog.alive);
dog.run();
dog.eat();
dog.sleep();

console.log(fish.name);
console.log(fish.alive);
fish.swim();
fish.eat();
fish.sleep();

console.log(bird.name);
console.log(bird.alive);
bird.fly();
bird.eat();
bird.sleep();