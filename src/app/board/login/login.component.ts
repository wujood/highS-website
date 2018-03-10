import { Component, OnInit } from '@angular/core';
import { HighscoreBoardCreatedResponse, HighscoreService, HighscoreBoard } from '../../../swagger';
import { BoardDataService } from '../../services/board-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list = [];
  boardName: string;
  totalCount = 0;
  boardId: number;

  constructor(public boardData: BoardDataService, private swaggerService: HighscoreService) { }

  ngOnInit() {
    this.boardData.boardEvents.subscribe(board => this.onLoadBoard(board));
  }

  onCreatedBoard() {
    this.boardData.loadHighscoreBoard(this.boardId);
  }

  onLoadBoard(board: HighscoreBoard) {
    this.list = [];
    this.totalCount = board.entries.length;
    this.boardName = board.name;
    board.entries.forEach(element => {
      if(this.list.length !== 10) {
        this.list.push(element);
      }
    });
  }
}
