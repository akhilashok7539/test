import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationpointsComponent } from './destinationpoints.component';

describe('DestinationpointsComponent', () => {
  let component: DestinationpointsComponent;
  let fixture: ComponentFixture<DestinationpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
