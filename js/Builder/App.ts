import Car from './Car';
import Director from './Director';
import CarBuilder from './CarBuilder';

export default class App {

    director: Director;

    constructor() {
        this.director = new Director();
    }

    public getF1(): Car {
        const builder = new CarBuilder();
        return this.director.construcF1Car(builder);
    }

    public getSUVCar(): Car {
        const builder = new CarBuilder();
        return this.director.construcSUVCar(builder);
    }
}
