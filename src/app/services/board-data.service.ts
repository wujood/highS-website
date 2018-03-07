import { Injectable, EventEmitter } from '@angular/core';
import { HighscoreService, HighscoreBoard, HighscoreBoardCreatedResponse } from '../../swagger';

@Injectable()
export class BoardDataService {

  public boardEvents: EventEmitter<HighscoreBoard>;
  public boardCreatedEvents: EventEmitter<HighscoreBoardCreatedResponse>;

  constructor(public swagger: HighscoreService) { 
    this.boardEvents = new EventEmitter();
    this.boardCreatedEvents = new EventEmitter();
  }

  /**
   * loadHighscoreBoard
   */
  public loadHighscoreBoard(id: number) {
    this.swagger.getHighscoreBoardById(id).subscribe((result: HighscoreBoard) => {
      if(result.id === null || result.id === undefined) {
        return;
      }
      this.boardEvents.emit(result);
    }, (error:any) => {
      console.error(JSON.stringify(error));
    });
  }

  /**
   * addHighscoreBoard
   */
  public addHighscoreBoard(name: string) {
    this.swagger.addHighscoreBoard({
      name: name,
      id: 0,
      entries: []
    }). subscribe ((result: HighscoreBoardCreatedResponse) => {
      this.boardCreatedEvents.emit(result);
    }, error => {
      console.error(JSON.stringify(error));
    });
  }
}
