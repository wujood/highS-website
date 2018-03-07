import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatInputModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiModule } from '../swagger';
import { ViewComponent } from './board/view/view.component';
import { CreateComponent } from './board/create/create.component';
import { FormsModule } from '@angular/forms';
import { BoardDataService } from './services/board-data.service';
import { CreatedComponent } from './board/created/created.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateComponent,
    CreatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApiModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [BoardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
