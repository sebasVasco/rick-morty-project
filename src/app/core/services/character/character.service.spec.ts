import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get characters', () => {
    service.getCharacters(1).subscribe((res) => {
      expect(res).toBeTruthy();
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: 'character/?page=1',
    });

    req.flush({});
  });
});
