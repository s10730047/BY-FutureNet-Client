import { OtherChartComponent } from './component/other-chart/other-chart.component';
import { OptionComponent } from './component/option/option.component';
import { BargainingChipComponent } from './component/bargaining-chip/bargaining-chip.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PositionComponent } from './component/position/position.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/header/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bargaining-chip',
    component: BargainingChipComponent
  },
  {
    path: 'option',
    component: OptionComponent
  },
  {
    path: 'otherChart',
    component: OtherChartComponent
  },
  {
    path: 'position',
    component: PositionComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
