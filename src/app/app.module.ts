import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavModule, MatListModule, MatIconModule, MatInputModule, MatCardModule, MatToolbarModule, MatStepperModule} from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiModule } from '../swagger';
import { ViewComponent } from './board/view/view.component';
import { CreateComponent } from './board/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardDataService } from './services/board-data.service';
import { CreatedComponent } from './board/created/created.component';
import { LoginComponent } from './board/login/login.component';
import { BoardComponent } from './board/board/board.component';
import { BoardCreationComponent } from './toplevel/board-creation/board-creation.component';
import { BoardViewComponent } from './toplevel/board-view/board-view.component';
import { WelcomeComponent } from './toplevel/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create',
    component: BoardCreationComponent
  },
  {
    path: 'view',
    component: BoardViewComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    CreateComponent,
    CreatedComponent,
    LoginComponent,
    BoardComponent,
    BoardCreationComponent,
    BoardViewComponent,
    WelcomeComponent
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
    MatToolbarModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BoardDataService],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
