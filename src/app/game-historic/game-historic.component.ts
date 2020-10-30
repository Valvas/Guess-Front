import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-historic',
  templateUrl: './game-historic.component.html',
  styleUrls: ['./game-historic.component.css']
})

export class GameHistoricComponent implements OnInit {
  historicList: string[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getHistoric().subscribe((historic: string[]) => {
      for (let x = 0; x < historic.length; x++) {
        this.historicList.push(historic[x]);
      }
    });
  }
}
