import { TestBed } from '@angular/core/testing';

import { NgRickRollService } from './ng-rick-roll.service';

describe('NgRickRollService', () => {
  let service: NgRickRollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgRickRollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
