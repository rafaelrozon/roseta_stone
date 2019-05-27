import { IProduct } from './IProduct';

export default class Product implements IProduct {

    name = 'Product';

    public createProduct(): Product {
        return new Product();
    }
}
