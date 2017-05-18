import { Component, OnInit } from '@angular/core';

import '../assets/css/styles.css';

import { APIServer, ServerService } from "./shared";
import { Observable } from "rxjs";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private selectedServer: APIServer;
    private timeout: any;

    constructor(private serverService: ServerService) {}

    handleServerUpdated(server: APIServer) {
        if(this.selectedServer == server) return;

        this.selectedServer = null;
    
        if(this.timeout) clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.selectedServer = server;
        }, 300);
    }
}