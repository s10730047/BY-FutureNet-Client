import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesChangeComponent } from './securities-change.component';

describe('SecuritiesChangeComponent', () => {
  let component: SecuritiesChangeComponent;
  let fixture: ComponentFixture<SecuritiesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritiesChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
