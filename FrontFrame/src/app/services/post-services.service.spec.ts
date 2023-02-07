import { TestBed } from '@angular/core/testing';

import { PostServices } from './post-services.service';

describe('PostServicesService', () => {
  let service: PostServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
