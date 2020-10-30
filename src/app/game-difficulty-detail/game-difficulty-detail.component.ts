import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-difficulty-detail',
  templateUrl: './game-difficulty-detail.component.html',
  styleUrls: ['./game-difficulty-detail.component.css']
})

export class GameDifficultyDetailComponent implements OnInit {

  @Input() selectedDifficulty: number;

  constructor() { }

  ngOnInit(): void { }
}
