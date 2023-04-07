import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { GETCharactersResponse } from '../../schemas/response.schema';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  endpoint = 'character';

  constructor(private http: HttpClient) {}

  getCharacters(
    pageNumber: number,
    filters?: { [name: string]: string; status: string; gender: string }
  ): Observable<GETCharactersResponse> {
    let filtersQuery = '';
    if (filters) {
      for (const key in filters) {
        if (filters[key]) {
          filtersQuery += `&${key}=${filters[key]}`;
        }
      }
    }
    return this.http
      .get<GETCharactersResponse>(`${this.endpoint}/?page=${pageNumber}${filtersQuery}`)
      .pipe(shareReplay());
  }
}
