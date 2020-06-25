import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsUnsubscribeComponent } from './reactive-forms-unsubscribe.component';

describe('ReactiveFormsUnsubscribeComponent', () => {
  let component: ReactiveFormsUnsubscribeComponent;
  let fixture: ComponentFixture<ReactiveFormsUnsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsUnsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
