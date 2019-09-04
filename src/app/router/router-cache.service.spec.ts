import { TestBed } from '@angular/core/testing';

import { RouterCacheService } from './router-cache.service';

describe('RouterCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterCacheService = TestBed.get(RouterCacheService);
    expect(service).toBeTruthy();
  });
});
