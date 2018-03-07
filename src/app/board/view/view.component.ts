import { Component, OnInit } from '@angular/core';
import { HighscoreService, HighscoreBoard, HighscoreBoardCreatedResponse } from '../../../swagger';
import { BoardDataService } from '../../services/board-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list = [];

  constructor(public boardData: BoardDataService, private swaggerService: HighscoreService) { }

  ngOnInit() {
    this.boardData.boardEvents.subscribe(board => this.onChangedBoard(board));
    this.boardData.boardCreatedEvents.subscribe(board => this.onCreatedBoard(board));
  }

  onCreatedBoard(e: HighscoreBoardCreatedResponse) {
    this.swaggerService.newEntry(e.id, {
      id: 0,
      username: 'Dave Race', 
      score: 53029421
    }).subscribe(result => {
      this.boardData.loadHighscoreBoard(e.id);
    });
  }

  onChangedBoard(e: HighscoreBoard) {
    this.list = [];
    e.entries.forEach(element => {
      this.list.push(element);
    });
  }
}
