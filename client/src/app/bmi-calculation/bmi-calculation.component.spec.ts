import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculationComponent } from './bmi-calculation.component';

describe('BmiCalculationComponent', () => {
  let component: BmiCalculationComponent;
  let fixture: ComponentFixture<BmiCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BmiCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
