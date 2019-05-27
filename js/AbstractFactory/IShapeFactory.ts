import {IShape} from './IShape';

export interface IShapeFactory {
    createShape(): IShape;
}
