import { Injectable } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import * as io from "socket.io-client";
import * as RxJS from 'rxjs';
import { environment } from '../environments/environment';

declare const feathers;
declare const localStorage;

@Injectable()
export class ApiService {
  public socket: SocketIOClient.Socket;

  public service: any;
  public app: any;

  private url: string = environment.api;

  constructor() {
    this.socket = io(this.url);
    this.app = feathers()
      .configure(feathers.socketio(this.socket))
      .configure(feathers.hooks())
      .configure(feathers.rx(RxJS, {
        idField:'_id',
        listStrategy:'always'
      }))
      .configure(feathers.authentication({ storage: window.localStorage }));

    this.service = this.app.service;
  }
}
