import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenavContainer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  @ViewChild(MatSidenavContainer) sidenav: MatSidenavContainer;

  constructor(private router: Router){}

  menuitems = [
    {title: 'Create', path:'/create'},
    {title: 'View', path:'/view'}
  ];

  onNavigate(path: string) {
    this.sidenav.close();
    this.router.navigateByUrl(path);
  }
}
