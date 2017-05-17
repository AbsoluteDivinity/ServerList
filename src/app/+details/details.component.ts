import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

import { APIServer } from "../shared";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({opacity: 1, transform: 'scale(1)'})),
            transition('void => *', [
                animate(300, keyframes([
                    style({opacity: 0, transform: 'scale(0)', offset: 0}),
                    style({opacity: 1, transform: 'scale(1.1)', offset: 0.3}),
                    style({opacity: 1, transform: 'scale(1)', offset: 1.0})
                ]))
            ]),
            transition('* => void', [
                animate(300, keyframes([
                    style({opacity: 1, transform: 'scale(1)', offset: 0}),
                    style({opacity: 1, transform: 'scale(1.1)', offset: 0.7}),
                    style({opacity: 0, transform: 'scale(0)', offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class DetailsComponent implements OnChanges {
    @Input()
    private server: APIServer;
    private connectUrl: string;

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        //console.log(changes);
        if(this.server && this.server.gamename == "IW4") {
            this.connectUrl = `iw4x://${this.server.address}`;
        }
    }

    private shouldConnect() {
        if(this.server && this.server.gamename == "IW4") return true;
        return false;
    }
}