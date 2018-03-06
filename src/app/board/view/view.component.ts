import { Component, OnInit } from '@angular/core';
import { HighscoreService, HighscoreBoard } from '../../../swagger';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list = [];

  constructor(public swagger: HighscoreService) { }

  ngOnInit() {
    this.swagger.getHighscoreBoardById(0).subscribe((result: HighscoreBoard) => {
      result.entries.forEach(entry => {
        this.list.push(entry.username + ': ' + entry.score.toString());
      });
    });
  }

}
