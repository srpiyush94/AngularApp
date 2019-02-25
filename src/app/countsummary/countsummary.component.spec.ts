import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsummaryComponent } from './countsummary.component';

describe('CountsummaryComponent', () => {
  let component: CountsummaryComponent;
  let fixture: ComponentFixture<CountsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
