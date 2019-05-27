import Factory from './Factory';
import Product from './Product';

export default class AppConfigurator {

    productFactory: Factory;

    constructor() {
        this.productFactory = new Factory();

    }

    registerProducts() {
        this.productFactory.registerProduct(1, new Product());
    }

}
