import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { DashboardService } from './dashboard.service';
import {ConfirmationService} from 'primeng/api';
import {Message} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ConfirmationService]
})

export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
     private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }

  public delete(event: Match) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.matches = this.matches.filter(match => match.id !== event.id)
      }
  });
  }

  public showDialog() {
    this.display = true;
    this.newMatch = this.matches[0]
}

public addNewMatch() {
  this.matches.unshift(this.newMatch)
  this.display = false;
}

public deleteAll(){
  if(this.selectedRows.length > 0){
    this.selectedRows.forEach(row => this.delete(row))
  }
}

   matches: Match[] = []
   totalMatches: number = 0
   selectedRows: Match[] = []
   display: boolean = false
   newMatch: Match = {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
   this.matches = this.dashboardService.getMatches()
   this.totalMatches = this.matches.length
  }

}
