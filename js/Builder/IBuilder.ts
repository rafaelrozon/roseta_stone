export interface IBuilder {
    setBreaks(): void;
    setEngine(enginePower: number): void;
    reset(): void;
    getProduct(): any;
}
