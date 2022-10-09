import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService]
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];
  title = 'DonTuch';
  ngOnInit(): void{
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
  ];
  }
}
