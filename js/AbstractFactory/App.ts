import { IShapeFactory } from './IShapeFactory';
import { IShape } from './IShape';

export default class App {

    factory: IShapeFactory;
    shape: IShape;

    constructor(factory: IShapeFactory) {
        this.factory = factory;
    }

    public createShape(): void {
        this.factory.createShape();
    }

    public draw(): void {
        this.shape.draw();
    }
}
