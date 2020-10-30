import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-difficulty',
  templateUrl: './game-difficulty.component.html',
  styleUrls: ['./game-difficulty.component.css']
})

export class GameDifficultyComponent implements OnInit {

  selectedDifficulty: number = 1;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectDifficulty(currentDifficulty: number): void {
    this.selectedDifficulty = currentDifficulty;
  }

  launchGame(): void {
    this.router.navigate(['/game/play'], { queryParams: { difficulty: this.selectedDifficulty } });
  }
}
