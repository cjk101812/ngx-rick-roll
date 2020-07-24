import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRickRollComponent } from './ng-rick-roll.component';

describe('NgRickRollComponent', () => {
  let component: NgRickRollComponent;
  let fixture: ComponentFixture<NgRickRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRickRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRickRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
