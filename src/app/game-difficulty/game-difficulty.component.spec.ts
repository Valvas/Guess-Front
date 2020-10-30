import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDifficultyComponent } from './game-difficulty.component';

describe('GameDifficultyComponent', () => {
  let component: GameDifficultyComponent;
  let fixture: ComponentFixture<GameDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDifficultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
