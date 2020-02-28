import { Component } from '@angular/core';
import { BlueStateStore } from './state/store'
import { BlueState } from './state/state';
import { BlueEvent } from './events';

@Component({
  selector: 'app-gray',
  templateUrl: './gray.component.html',
  styleUrls: ['./gray.component.scss']
})
export class GrayComponent {


  constructor(private eventHub: EventHub,
    private blueStateStore: BlueStateStore) {
     }

  blueAction(): void {
    this.blueStateStore.setState((state: BlueState) => {
      const blue = state.blue.value + 1;
      return {
        blue: {
          value: blue
        }
      };
    });

    this.eventHub.dispatch<BlueEvent>({
      name:'blue-event'
    });
  }

}
