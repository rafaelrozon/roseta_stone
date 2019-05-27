import CircleFactory from './CircleFactory';
import SquareFactory from './SquareFactory';
import App from './App';

export default class AppConfigurator {

    app: App;

    constructor(shapeType: string) {
        let factory;

        if (shapeType === 'circle') {
            factory = new CircleFactory();
        } else if (shapeType === 'square') {
            factory = new SquareFactory();
        } else {
            throw new Error("Shape not supported");
        }

        this.app = new App(factory);
    }
}
