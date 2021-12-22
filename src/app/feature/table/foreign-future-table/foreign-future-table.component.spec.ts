import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignFutureTableComponent } from './foreign-future-table.component';

describe('ForeignFutureTableComponent', () => {
  let component: ForeignFutureTableComponent;
  let fixture: ComponentFixture<ForeignFutureTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignFutureTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignFutureTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
