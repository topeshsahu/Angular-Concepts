import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HomeComponent } from './app/concepts/ngrx-store';
import { GameBoardComponent } from './app/concepts/tic-tac-toe/game-board/game-board.component';
// import { HomeComponent } from './app/concepts/route-guards';

bootstrapApplication(GameBoardComponent, appConfig).catch((err) =>
  console.error(err)
);
