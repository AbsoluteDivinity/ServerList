import { Component, Input, Output, EventEmitter } from '@angular/core';

import { APIServer } from "../shared";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input()
    private servers: APIServer[] = [];

    @Output()
    private serverUpdated = new EventEmitter();

    private onHover(server: APIServer) {
        this.serverUpdated.emit(server);
    }
}