import { Component, OnInit } from '@angular/core';
import { HighscoreService, HighscoreBoardCreatedResponse } from '../../../swagger';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public name: string;
  private created = false;
  private id:number;
  private apikey:string;
  constructor(public swagger: HighscoreService) { }

  ngOnInit() {

  }

  createNewHighscoreBoard() {
    this.swagger.addHighscoreBoard({
      name: this.name,
      id: 0,
      entries: []
    }). subscribe ((result: HighscoreBoardCreatedResponse) => {
      this.apikey = result.apikey;
      this.id = result.id;
      this.created = true;
    });
  }
}
