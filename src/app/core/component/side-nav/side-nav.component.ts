import { Component, OnInit } from '@angular/core';
import { SimpleMenu } from 'simple-sidenav';
import { SimpleAnimation } from 'simple-sidenav/lib/interfaces/simple-animation';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  isCollapsed = false;


  constructor() { }

  ngOnInit(): void {
  }

}
