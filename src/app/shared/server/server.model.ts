export class APIServer {
    constructor(
        public hostname?: string,
        public map?: string,
        public map_unclean?: string,
        public gametype?: string,
        public players?: string,
        public maxplayers?: string,
        public gamename?: string,
        public address?: string
    ) {}
}

export class CachedServer {
    constructor(
        public ip?: string,
        public port?: string,
        public game?: string
    ) {}
}