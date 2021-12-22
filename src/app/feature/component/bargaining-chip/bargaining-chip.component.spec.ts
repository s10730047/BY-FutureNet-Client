import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargainingChipComponent } from './bargaining-chip.component';

describe('BargainingChipComponent', () => {
  let component: BargainingChipComponent;
  let fixture: ComponentFixture<BargainingChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargainingChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BargainingChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
