import { Component, OnInit } from '@angular/core';
import { Match } from '../match';
import { DashboardService } from './dashboard.service';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ConfirmationService]
})

export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private toast: NgToastService,
    private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) { }

  public delete(event: Match) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want delete this match?',
      accept: () => {
        this.matches = this.matches.filter(match => match.id !== event.id)
        this.toast.success({detail:"Delete", summary:"successful cancellation of the match", duration: 5000})
      }
    });
  }

  public addNewMatch() {
    this.newMatch = JSON.parse(JSON.stringify(this.matches[0]))
    this.matches.unshift(this.newMatch)
  }

  public deleteAll() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want delete all matches selected?',
      accept: () => {
        if (this.selectedRows.length > 0) {
          this.selectedRows.forEach(row => {
            this.matches = this.matches.filter(match => match.id !== row.id)
          })
        }
        this.toast.success({detail:"Delete", summary:"successful cancellation of the matches", duration: 5000})
      }
    });
  }

  public ShowMatchTeamsDetails(event: Match){
    event.showMatchTeams = !event.showMatchTeams
  }

  matches: Match[] = []
  totalMatches: number = 0
  selectedRows: Match[] = []
  newMatch: Match = {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.matches = this.dashboardService.getMatches()
    this.totalMatches = this.matches.length
  }

}
