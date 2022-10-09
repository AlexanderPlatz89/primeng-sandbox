import { Injectable } from '@angular/core';
import { Match } from '../match';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  matches: Match[] = []

  constructor() { }

  getMatches() {
    axios.get('https://www.dontouch.ch/json/cc.json').then(resp => {
      console.log(resp)
      if(resp != null){
        let response = resp.data.doc[0].data.matches
        for (var key in response) {
          this.matches.push({
            id: response[key]._id,
            matchTeams: response[key].teams,
            time: response[key].time.time,
            date: response[key].time.date,
            result: response[key].result,
            showMatchTeams: false
          })
        }
      }
    })
    return this.matches
  }
}
