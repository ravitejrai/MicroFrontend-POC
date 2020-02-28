import { Observable } from 'rxjs';

export declare abstract class StateSelector<T> {
    private globalStateStore;

    constructor();

    select<R>(slice: string): Observable<R>
} 