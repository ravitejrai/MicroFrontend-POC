export declare abstract class StateStore<T> {
    private initState;
    private globalStateStore;

    constructor(initState: T);


    getState(): T;


    setState(state: Partial<T> | ((state: T) => Partial<T>)): void;
}