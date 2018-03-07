import { Component, OnInit } from '@angular/core';
import { HighscoreBoardCreatedResponse } from '../../../swagger';
import { BoardDataService } from '../../services/board-data.service';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css']
})
export class CreatedComponent implements OnInit {

  boardCreated: HighscoreBoardCreatedResponse;

  constructor(public board: BoardDataService) { }

  ngOnInit() {
    this.board.boardCreatedEvents.subscribe(event => this.createNewHighscoreBoard(event));
  }

  createNewHighscoreBoard(boardResponse: HighscoreBoardCreatedResponse) {
    this.boardCreated = boardResponse;
  }
}
