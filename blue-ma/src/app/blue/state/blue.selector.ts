import { Injectable } from "@angular/core";
import { BlueState } from './blue';
import { BlueValue } from './blue';
import { StateSelector } from './state.selector';

@Injectable({
    providedIn: 'root'
})

export class BlueStateSelector extends StateSelector<BlueState> {
    blue$: any = this.select<BlueValue>('blue');
}