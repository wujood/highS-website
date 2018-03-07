import { Component, OnInit } from '@angular/core';
import { HighscoreBoardCreatedResponse } from '../../../swagger';
import { BoardDataService } from '../../services/board-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public name: string;

  constructor(public board: BoardDataService) { }

  ngOnInit() {
  }

  createNewHighscoreBoard() {
    if(this.name === null || this.name === undefined) {
      console.error("Name not set!");
      return;
    }
    this.board.addHighscoreBoard(this.name);
  }
}
