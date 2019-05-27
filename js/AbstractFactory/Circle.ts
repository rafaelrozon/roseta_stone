import { IShape } from './IShape';

export default class Circle implements IShape {
    name = 'Circle'
    public draw(): void {
        console.log('drawing circle...');
    }
}
