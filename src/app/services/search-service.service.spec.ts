import { TestBed } from '@angular/core/testing';

import { SearchServiceService } from './search-service.service';

describe('SearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchServiceService = TestBed.get(SearchServiceService);
    expect(service).toBeTruthy();
  });
});
