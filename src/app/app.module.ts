import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatInputModule, MatCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ApiModule } from '../swagger';
import { ViewComponent } from './board/view/view.component';
import { CreateComponent } from './board/create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
