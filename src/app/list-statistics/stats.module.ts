import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { ListStatistics } from '../list-statistics/list-statistics.component';
import { DetailsComponent } from '../details/details.component';
import { AuthorizationGuard } from '../authorization.guard';

@NgModule({
  declarations: [
    ListStatistics,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'statistics',
        component: ListStatistics,
        canActivate: [AuthorizationGuard]
      },
      {
        path: 'infodetails',
        component: DetailsComponent,
      },
    ])
  ]
})
export class StatsModule { }
