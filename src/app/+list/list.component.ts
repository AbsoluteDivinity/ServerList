import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

import { APIServer, ServerService } from "../shared";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
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
export class ListComponent implements OnInit {
    private servers: APIServer[] = [];
    private loaded: boolean = false;

    @Output()
    private serverUpdated = new EventEmitter();

    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.updateServers();

        /*setInterval(() => {
            this.updateServers();
        }, 10 * 1000);*/
    }

    private updateServers() {
        //this.servers = [];
        this.serverService.getServers().subscribe(
            server => {
                this.servers.push(server);

            },
            error => console.error(error),
            () => {
                this.serverUpdated.emit(this.servers[0]);
                this.loaded = true;
            });//.unsubscribe();
    }

    private onMouseEnter(server: APIServer) {
        this.serverUpdated.emit(server);
    }
}