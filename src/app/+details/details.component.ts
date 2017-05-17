import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    private _connectUrl: string;

    get connectUrl() {
        return this._connectUrl ? this.sanitizer.bypassSecurityTrustUrl(this._connectUrl) : null;
    }

    constructor(private sanitizer: DomSanitizer) {}

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        // TODO: Make this part a bit cleaner, its just a simple workaround...
        if(this.server) {
            switch(this.server.gamename) {
                case 'iw4':
                    this._connectUrl = `iw4x://${this.server.address}`;
                    break;
                case 'samp':
                    this._connectUrl = `samp://${this.server.address}`;
                    break;
                default:
                    this._connectUrl = null;
            }
        }
    }

    private shouldConnect() {
        if(this.server && this.server.gamename == "iw4") return true;
        return false;
    }
}