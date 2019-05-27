import { IShapeFactory } from './IShapeFactory';
import Circle from './Circle';

export default class CircleFactory implements IShapeFactory {

    public createShape(): Circle {
        return new Circle();
    }
}
