import { Component, OnInit } from '@angular/core';
import {PairingsService} from '../Services/pairings.service';
import {CommonModule} from '@angular/common';
import {PairingsInterface} from '../Classes/PairingsInterface';
import {Subscription} from 'rxjs';
import {ProductMatchesInterface} from '../Classes/ProductMatchesInterface';


@Component({
  selector: 'app-wine-pairings',
  templateUrl: './wine-pairings.component.html',
  styleUrls: ['./wine-pairings.component.css']
})
export class WinePairingsComponent implements OnInit {
  dataFromServer;
  products: ProductMatchesInterface[];
  object;
  title;
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
        console.log(res.productMatches);
        this.products = res.productMatches;
        console.log(this.products);
      }
    );
  }

}
