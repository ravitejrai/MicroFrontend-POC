import { NgModule, DoBootstrap, Injector } from "@angular/core";
import { BlueComponent } from './blue.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations:[BlueComponent],
    exports:[BlueComponent],
    imports:[BrowserModule],
    providers:[],
    entryComponents:[BlueComponent]
})


export class BlueModule implements DoBootstrap {
    constructor(private injector: Injector){}

    ngDoBootstrap(): any {
        const customElement = createCustomElement(BlueComponent, {
            injector: this.injector
        });

        if(!customElements.get('app-blue')) {
            customElements.define('app-blue', customElement);
        }
    }
}