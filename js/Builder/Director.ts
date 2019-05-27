import { IBuilder } from './IBuilder';
import Car from './Car';

export default class CarDirector {

    public construcSUVCar(builder: IBuilder): Car {
        builder.reset();
        builder.setBreaks();
        builder.setEngine(8);
        return builder.getProduct();
    }

    public construcF1Car(builder: IBuilder): Car {
        builder.reset();
        builder.setBreaks();
        builder.setEngine(100);
        return builder.getProduct();
    }


}
