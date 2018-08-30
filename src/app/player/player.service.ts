import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService
{
  private _connection: HubConnection;
  constructor()
  {
    this._connection = new HubConnectionBuilder().withUrl("http://172.23.238.237:8000/question").build();
    this._connection.start().then(() => console.log('MessageHub Connected'));
  }

  sendData(data) {
    this._connection.invoke('send', data.test);
  }
}
