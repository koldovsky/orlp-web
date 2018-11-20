import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionshistoryComponent } from './transactionshistory.component';

describe('TransactionshistoryComponent', () => {
  let component: TransactionshistoryComponent;
  let fixture: ComponentFixture<TransactionshistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionshistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionshistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
