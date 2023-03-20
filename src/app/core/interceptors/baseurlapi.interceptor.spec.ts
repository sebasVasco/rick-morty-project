import { HttpRequest } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { BASE_URL } from '../services/endpoints.tokens';

import { BaseurlapiInterceptor } from './baseurlapi.interceptor';

describe('BaseurlapiInterceptor', () => {
  let interceptor: BaseurlapiInterceptor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseurlapiInterceptor, { provide: BASE_URL, useValue: '' }],
    });
    interceptor = TestBed.inject(BaseurlapiInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should clone a request', () => {
    const requestMock = new HttpRequest('GET', '/test');
    const next: any = {
      handle: () => {
        return new Observable((subscriber) => {
          subscriber.complete();
        });
      },
    };
    const clonedRequest = interceptor.intercept(requestMock, next);
    expect(clonedRequest).toBeTruthy();
  });
});
