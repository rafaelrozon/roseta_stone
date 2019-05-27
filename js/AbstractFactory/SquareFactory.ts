import { IShapeFactory } from './IShapeFactory';
import Square from './Square';

export default class SquareFactory implements IShapeFactory {

    public createShape(): Square {
        return new Square();
    }
}
