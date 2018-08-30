import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  providers: [
    PlayerService
  ],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) {}

  sendData() {
    console.log("Sending Data");
    const data = {
      test: 'This is the test data',
    };
    this.playerService.sendData(data);
  }

  ngOnInit() {}
 }





