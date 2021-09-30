import { Injectable } from '@angular/core';
import { Client, SearchResponse } from 'elasticsearch';

@Injectable({
  providedIn: 'root'
})
export class ElasticserviceService {

  private _client: Client;

    constructor() {
        if (!this._client) this._connect();
    }

    private _connect() {
        this._client = new Client({
            host: 'http://100.103.190.162:9200/'
        });
        this.checkStatus();
    }

    checkStatus() {
        this._client.ping({
            requestTimeout: 30000,
        }, function (error) {
            if (error) {
                console.error('elasticsearch cluster is down!');
            } else {
                console.log('All is well');
            }
        });
    }
}
