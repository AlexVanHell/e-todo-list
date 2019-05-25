import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it('should return user object or null', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);

    if (localStorage.getItem(service.sessionName)) {
      expect(service.getUser()).toEqual(jasmine.objectContaining({ firstName: '', lastName: '' }));
    } else {
      expect(service.getUser()).toBeNull();
    }
  });
});
