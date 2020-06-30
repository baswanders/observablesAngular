import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoneComponent } from './takeone.component';

describe('TakeoneComponent', () => {
  let component: TakeoneComponent;
  let fixture: ComponentFixture<TakeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
