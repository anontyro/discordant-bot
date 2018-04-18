import { TestBed, inject } from '@angular/core/testing';

import { MainViewService } from './main-view.service';

describe('MainViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainViewService]
    });
  });

  it('should be created', inject([MainViewService], (service: MainViewService) => {
    expect(service).toBeTruthy();
  }));
});
