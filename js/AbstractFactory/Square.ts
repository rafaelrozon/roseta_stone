import { IShape } from './IShape';

export default class Square implements IShape {
    name = 'Square'
    public draw(): void {
        console.log('drawing share...');
    }
}
