import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent{

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.paths = this.router.config;
  }

  public paths: Route[];

}
