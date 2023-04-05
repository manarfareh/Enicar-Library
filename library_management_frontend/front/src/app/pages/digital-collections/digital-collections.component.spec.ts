import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCollectionsComponent } from './digital-collections.component';

describe('DigitalCollectionsComponent', () => {
  let component: DigitalCollectionsComponent;
  let fixture: ComponentFixture<DigitalCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
