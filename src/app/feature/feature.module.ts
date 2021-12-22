import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './component/home/home.component';
import { BargainingChipComponent } from './component/bargaining-chip/bargaining-chip.component';
import { OptionComponent } from './component/option/option.component';
import { FuturesChartComponent } from './Charts/futures-chart/futures-chart.component';
import { ForeignInvestorComponent } from './Charts/foreign-investor/foreign-investor.component';
import { ForeignInvestorOptionComponent } from './Charts/foreign-investor-option/foreign-investor-option.component';
import { TestComponent } from './Charts/test/test.component';
import { ForeignFutureTableComponent } from './table/foreign-future-table/foreign-future-table.component';
import { OptionTableComponent } from './table/option-table/option-table.component';
import { OtherChartComponent } from './component/other-chart/other-chart.component';
import { SecuritiesChangeComponent } from './Charts/securities-change/securities-change.component';
import { PositionComponent } from './component/position/position.component';
import { AddPositionDialogComponent } from './component/dialog/add-position-dialog/add-position-dialog.component'



@NgModule({
  declarations: [
    HomeComponent,
    BargainingChipComponent,
    OptionComponent,
    FuturesChartComponent,
    ForeignInvestorComponent,
    ForeignInvestorOptionComponent,
    TestComponent,
    ForeignFutureTableComponent,
    OptionTableComponent,
    OtherChartComponent,
    SecuritiesChangeComponent,
    PositionComponent,
    AddPositionDialogComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
