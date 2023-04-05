import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalCollectionsComponent } from './physical-collections.component';

describe('PhysicalCollectionsComponent', () => {
  let component: PhysicalCollectionsComponent;
  let fixture: ComponentFixture<PhysicalCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicalCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
