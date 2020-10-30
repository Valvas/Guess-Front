import { GameDifficulty } from '../GameDifficulty';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-header',
  templateUrl: './game-header.component.html',
  styleUrls: ['./game-header.component.css']
})

export class GameHeaderComponent implements OnInit {
  @Input() gameDifficulty: GameDifficulty;

  constructor() { }

  ngOnInit(): void { }
}
