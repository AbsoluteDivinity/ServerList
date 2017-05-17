import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { APIServer, CachedServer } from "./server.model";

import { Observable } from "rxjs";

import * as async from 'async';

@Injectable()
export class ServerService {
    private apiservers: APIServer[] = [];
    private cachedservers: CachedServer[] = [
        {
            ip: "91.121.210.82",
            port: "28961",
            game: "iw4m"
        },
        {
            ip: "91.121.210.82",
            port: "28962",
            game: "iw4m"
        },
        {
            ip: "91.121.210.82",
            port: "28963",
            game: "iw4m"
        },
        {
            ip: "158.85.101.20",
            port: "28015",
            game: "rust"
        },
        {
            ip: "162.248.88.203",
            port: "27038",
            game: "rust"
        },
        {
            ip: "play.dream-mc.org",
            port: "25565",
            game: "mc"
        },
        {
            ip: "64.32.27.217",
            port: "28930",
            game: "cod4"
        },
        {
            ip: "66.150.121.164",
            port: "28931",
            game: "cod4"
        },
        {
            ip: "64.32.27.220",
            port: "28930",
            game: "cod4"
        }
    ]; // TODO make a file for this....

    private API_URL = 'https://api.absolutedivinity.net';

    constructor(private http: Http) {}

    public getServers(): Observable<APIServer[]> {
        //let test: Observable<APIServer>[] = [];
        //return new Promise((resolve, reject) => {

        /*async.map(this.cachedservers, (server, cb) => {
            cb(null, this.getServer(server));
        }, (err, results) => {
            callback(Observable.forkJoin(<Observable<APIServer>[]>results));
        });*/
        const serverObservables = this.cachedservers.map(server => this.getServer(server));
        return Observable.forkJoin(...serverObservables);
        //});
    }

    public getServer(server: CachedServer): Observable<APIServer> {
        return this.http.get(`${this.API_URL}/server/${server.game}?ip=${server.ip}:${server.port}`)
            .map(res => res.json() as APIServer)
            .map(ServerService.extractData)
            //.toPromise();
            //.catch(this.onError);

    }

    static extractData(server: any) {
        console.log(server);
        return new APIServer(
            server.Hostname,
            server.Map,
            server.Map_unclean,
            server.Gamemode,
            server.Players,
            server.MaxPlayers,
            server.Gamename,
            server.Address);
    }

    private onError(err: any) {
        console.error("An error occured!", err);
        //return Observable.throw(err.message || err);
        return ;
    }

}