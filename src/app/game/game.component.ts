import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  gameDifficulty: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (typeof params.difficulty !== 'undefined') {
        const currentDifficulty: number = parseInt(params.difficulty, 10);

        if (!(isNaN(currentDifficulty))) {
          this.gameDifficulty = currentDifficulty;
        }
      }
    });
  }
}
