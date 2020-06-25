import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapObservableComponent } from './map-observable.component';

describe('MapObservableComponent', () => {
  let component: MapObservableComponent;
  let fixture: ComponentFixture<MapObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
