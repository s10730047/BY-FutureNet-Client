import { Observable } from 'rxjs';
import { FuturesDataService } from './../../services/services/futures-data.service';
import { Component, OnInit, ViewChild ,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataSource } from '@angular/cdk/collections';
import { Futures } from '../../models/Futures.models';
import { MatDialog } from '@angular/material/dialog';
import { AddPositionDialogComponent } from '../dialog/add-position-dialog/add-position-dialog.component';




@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})

export class PositionComponent implements OnInit {

  displayedColumns: string[] = ['StockName', 'BuyLot', 'BuyPrice', 'HandingCharge','FinalPrice','CurrentPrice',
  'MarketValue','UGAL','UGALR'];
  dataSource = new FuturesDataSource(this.FuturesDataService);
  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private FuturesDataService: FuturesDataService,
              private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPositionDialogComponent, { disableClose: false });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
