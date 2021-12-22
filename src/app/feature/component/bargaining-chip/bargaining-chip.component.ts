import { Observable } from 'rxjs';
import { FuturesDataService } from './../../services/services/futures-data.service';
import { Component, OnInit, ViewChild ,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
import { Futures } from '../../models/Futures.models';



@Component({
  selector: 'app-bargaining-chip',
  templateUrl: './bargaining-chip.component.html',
  styleUrls: ['./bargaining-chip.component.scss']
})

export class BargainingChipComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'TAIEX', 'Fluctuation', 'ForeignInvestors','InvestmentTrust','Dealer',
  'Margin','MarginChange','ShortSelling','ShortSellingChang','FuturesLongOpenPosition','FuturesShortOpenPosition',
  'FuturesNet','FuturesLongVary','FuturesShortVary'];
  dataSource = new FuturesDataSource(this.FuturesDataService);
  @ViewChild(MatPaginator) paginator: MatPaginator


  constructor(private FuturesDataService: FuturesDataService) { }

  ngOnInit(): void {
  }


}

export class FuturesDataSource extends DataSource<any> {
  constructor(private FuturesDataService: FuturesDataService){
    super();
  }

  connect():Observable<Futures[]>{
    return this.FuturesDataService.getFutureData();

  }

  disconnect(){}
}



