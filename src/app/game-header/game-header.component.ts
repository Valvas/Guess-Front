import { GameDifficulty } from '../GameDifficulty';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})

export class GameHeaderComponent implements OnInit {
  gameDifficulty: GameDifficulty;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
