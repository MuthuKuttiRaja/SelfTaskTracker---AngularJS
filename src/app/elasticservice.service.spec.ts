import { TestBed } from '@angular/core/testing';

import { ElasticserviceService } from './elasticservice.service';

describe('ElasticserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElasticserviceService = TestBed.get(ElasticserviceService);
    expect(service).toBeTruthy();
  });
});
