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
       this.serverService.getServers().subscribe(
           servers => {
               this.servers = servers;
               this.loaded = true;
           },
           error => console.error(error),
           () => console.log("Loaded servers."));
    }

    private onMouseEnter(server: APIServer) {
        this.serverUpdated.emit(server);
    }
}