import { Component, OnInit } from '@angular/core';
import {PairingsService} from '../Services/pairings.service';
import {CommonModule} from '@angular/common';
import {PairingsInterface} from '../Classes/PairingsInterface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-wine-pairings',
  templateUrl: './wine-pairings.component.html',
  styleUrls: ['./wine-pairings.component.css']
})
export class WinePairingsComponent implements OnInit {
  dataFromServer: Subscription;
  foodType: any;
  constructor(
    private pairingService: PairingsService,
  ) { }

  ngOnInit(): void {
  }
  onClickMe(foodType: any): void {
    console.log(foodType);
    this.dataFromServer = this.pairingService.getPairings(foodType).subscribe (
      res => {
        this.dataFromServer = res;
      }
    );
  }

}
