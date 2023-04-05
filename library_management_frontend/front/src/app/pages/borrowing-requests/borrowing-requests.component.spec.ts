import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingRequestsComponent } from './borrowing-requests.component';

describe('BorrowingRequestsComponent', () => {
  let component: BorrowingRequestsComponent;
  let fixture: ComponentFixture<BorrowingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
