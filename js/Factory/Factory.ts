import { IProduct } from './Product';

export default class Factory {

    productMap: {
        [key: string]: IProduct
    };

    public registerProduct(productId: number, product: IProduct) {
        this.productMap[productId] = product;
    }

    public createProduct(productId: number): IProduct {
        return this.productMap[productId].createProduct();
    }
}
