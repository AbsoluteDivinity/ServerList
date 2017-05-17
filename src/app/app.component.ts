import { Component, OnInit } from '@angular/core';

import '../assets/css/styles.css';

import { APIServer, ServerService } from "./shared";
import { Observable } from "rxjs";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    private apiservers: APIServer[] = [];
    private selectedServer: APIServer;

    constructor(private serverService: ServerService) {}

    ngOnInit() {
       this.serverService.getServers((servers: Observable<APIServer[]>) => {
           servers.subscribe(servers => {
               console.log(servers);
               this.apiservers = servers;
               this.selectedServer = this.apiservers[0];
           })
       })
    }

    handleServerUpdated(server: APIServer) {
        this.selectedServer = server;
    }
}