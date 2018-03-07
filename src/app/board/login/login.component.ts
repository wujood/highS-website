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
    board.entries.forEach(element => {
      this.list.push(element);
    });
  }
}
