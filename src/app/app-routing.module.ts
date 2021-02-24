import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes , RouterModule} from '@angular/router';
import {WinePairingsComponent} from './wine-pairings/wine-pairings.component';

const routes: Routes = [
  { path: '', component: WinePairingsComponent },
  { path: 'pairings', component: WinePairingsComponent }
  ];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
