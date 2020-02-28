import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlueStateSelector } from './state/blue.selector';
import { pluck, filter } from 'rxjs/operators';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.scss']
})
export class BlueComponent {

  blueValue$: Observable<number>;

  constructor(private blueStateSelector: BlueStateSelector) {

    this.blueValue$ = this.blueStateSelector.blue$.pipe(
      filter(val => !!val),
      pluck('value')
    );
   }

}
