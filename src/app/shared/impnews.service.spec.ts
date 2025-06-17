import { TestBed } from '@angular/core/testing';

import { ImpnewsService } from './impnews.service';

describe('ImpnewsService', () => {
  let service: ImpnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
