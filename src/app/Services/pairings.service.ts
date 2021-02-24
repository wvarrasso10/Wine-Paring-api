import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {PairingsInterface} from '../Classes/PairingsInterface';
import {tap} from 'rxjs/operators';
const myApiKey = '44994947f82c4fe3a29eedb9a18a88a0&';
@Injectable({
  providedIn: 'root'
})

export class PairingsService {
  constructor(private http: HttpClient) { }

  getPairings(chosenFood: string): Observable<any> {
    return this.http.get<PairingsInterface>('https://api.spoonacular.com/food/wine/pairing?apiKey=' + myApiKey + 'food=' + chosenFood)
    .pipe(tap((recievedData: PairingsInterface) => console.log(recievedData)));
  }
}
