import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardDataService } from '../../services/board-data.service';
import { HighscoreBoardCreatedResponse } from '../../../swagger';
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-board-creation',
  templateUrl: './board-creation.component.html',
  styleUrls: ['./board-creation.component.css']
})
export class BoardCreationComponent implements OnInit {

  @ViewChild(MatStepper) stepper: MatStepper;

  constructor(private boardData: BoardDataService) { }

  ngOnInit() {
    this.boardData.boardCreatedEvents.subscribe(board => this.onCreatedBoard(board));
  }

  onCreatedBoard(board: HighscoreBoardCreatedResponse) {
    this.stepper.next();
  }
}
