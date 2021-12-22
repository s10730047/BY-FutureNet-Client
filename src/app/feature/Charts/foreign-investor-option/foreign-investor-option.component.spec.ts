import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignInvestorOptionComponent } from './foreign-investor-option.component';

describe('ForeignInvestorOptionComponent', () => {
  let component: ForeignInvestorOptionComponent;
  let fixture: ComponentFixture<ForeignInvestorOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignInvestorOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignInvestorOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
