import { TestBed, inject } from '@angular/core/testing';

import { StoresService } from './stores.service';

describe('StoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoresService]
    });
  });

  it('should be created', inject([StoresService], (service: StoresService) => {
    expect(service).toBeTruthy();
  }));
});
