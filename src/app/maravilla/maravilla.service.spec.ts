/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaravillaService } from './maravilla.service';

describe('Service: Maravilla', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaravillaService]
    });
  });

  it('should ...', inject([MaravillaService], (service: MaravillaService) => {
    expect(service).toBeTruthy();
  }));
});
