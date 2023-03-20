import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GETCharactersResponse } from '../response.schema';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  endpoint = 'character';

  constructor(private http: HttpClient) {}

  getCharacters(pageNumber: number): Observable<GETCharactersResponse> {
    return this.http.get<GETCharactersResponse>(`${this.endpoint}/?page=${pageNumber}`);
  }
}
