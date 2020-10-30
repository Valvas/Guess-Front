import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameHistoricComponent } from './game-historic/game-historic.component';
import { GameInputComponent } from './game-input/game-input.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { GameDifficultyComponent } from './game-difficulty/game-difficulty.component';
import { GameDifficultyDetailComponent } from './game-difficulty-detail/game-difficulty-detail.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameHeaderComponent,
    GameHistoricComponent,
    GameInputComponent,
    LoginComponent,
    MenuComponent,
    GameDifficultyComponent,
    GameDifficultyDetailComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
