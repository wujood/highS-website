import { Component, OnInit, Input } from '@angular/core';
import { HighscoreService } from '../../../swagger';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() name = "highS-Board"
  @Input() list = [];
  @Input() totalCount = 0;

  constructor(public swagger: HighscoreService) { }

  ngOnInit() {
  }

  deleteEntry(index: number) {
    console.warn("Not implemented yet!");
  }
}
