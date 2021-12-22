import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { OptionDataService } from '../../services/services/option-data.service';
import { Option } from '../../models/Option.models';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  dataSource = new UserDataSource(this.OptionDataService);
  displayedColumns = ['Date', 'FuturesClosingPrice','Fluctuation','BuyCall','BuyCallChange','BuyPut','BuyPutChange',
 'SellCall', 'SellCallChange', 'SellPut', 'SellPutChange','BuyNet','SellNet','BuyOpenPosition','SellOpenPosition'];
  constructor(private OptionDataService: OptionDataService) { }

  ngOnInit(): void {
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: OptionDataService) {
    super();
  }
  connect(): Observable<Option[]> {
    return this.userService.getUser();
  }
  disconnect() {}
}
