import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { APIServer } from "../shared";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
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