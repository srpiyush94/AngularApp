import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionfailureComponent } from './transactionfailure.component';

describe('TransactionfailureComponent', () => {
  let component: TransactionfailureComponent;
  let fixture: ComponentFixture<TransactionfailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionfailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionfailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
