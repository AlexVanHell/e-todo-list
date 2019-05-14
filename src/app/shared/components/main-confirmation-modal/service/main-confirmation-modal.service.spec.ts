import { TestBed } from '@angular/core/testing';

import { MainConfirmationModalService } from './main-confirmation-modal.service';

describe('MainConfirmationModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainConfirmationModalService = TestBed.get(MainConfirmationModalService);
    expect(service).toBeTruthy();
  });
});
