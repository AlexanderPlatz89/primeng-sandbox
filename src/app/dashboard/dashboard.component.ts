import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { DashboardService } from './dashboard.service';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
    private primengConfig: PrimeNGConfig ) { }

  public delete(event: Match) {
    this.matches = this.matches.filter(match => match.id !== event)
  }

  public showDialog() {
    console.log("DIO")
    this.display = true;
}

   matches: Match[] = []
   selectedRows: Match[] = []
   display: boolean = false

  ngOnInit(): void {
   this.matches = this.dashboardService.getMatches()
  }

}
