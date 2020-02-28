import { Injectable } from "@angular/core";
import { BlueState } from './state';
import { StateStore } from './state.store';

const blueInitState = () => {
    return {
        blue: {
            value: 0
        }
    };
};

@Injectable({
    providedIn: 'root'
})

export class BlueStateStore extends StateStore<BlueState> {
    constructor() {
        super(blueInitState());
    }
}