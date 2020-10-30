import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDifficultyDetailComponent } from './game-difficulty-detail.component';

describe('GameDifficultyDetailComponent', () => {
  let component: GameDifficultyDetailComponent;
  let fixture: ComponentFixture<GameDifficultyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameDifficultyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDifficultyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
