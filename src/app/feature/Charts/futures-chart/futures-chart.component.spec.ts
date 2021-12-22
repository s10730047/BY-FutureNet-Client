import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturesChartComponent } from './futures-chart.component';

describe('FuturesChartComponent', () => {
  let component: FuturesChartComponent;
  let fixture: ComponentFixture<FuturesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
