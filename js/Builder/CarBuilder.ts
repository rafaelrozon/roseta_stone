import Car from './Car';
import { IBuilder } from './IBuilder';

export default class CarBuilder implements IBuilder {

    car: Car;
    enginePower: number;

    public reset() {
        this.car = new Car();
    }

    public setBreaks(): void {
        console.log('setting breaks...');
    }

    public setEngine(enginePower: number): void {
        this.enginePower = enginePower;
        console.log('setting engine...');
    }

    public getProduct(): Car {
        const product = this.car;
        this.reset();
        return product;
    }
}
