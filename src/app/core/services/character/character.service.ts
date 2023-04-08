import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { GETCharactersResponse } from '../../schemas/response.schema';
import { CharacterFilters } from '@app/features/character/components/character-filter/character-filter.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  endpoint = 'character';

  constructor(private http: HttpClient) {}

  getCharacters(
    pageNumber: number,
    filters?: CharacterFilters | null | undefined
  ): Observable<GETCharactersResponse> {
    const copiedFilters: { [key: string]: unknown } = { ...filters };
    let filtersQuery = '';
    if (filters) {
      for (const key in filters) {
        if (copiedFilters[key]) {
          filtersQuery += `&${key}=${copiedFilters[key]}`;
        }
      }
    }
    return this.http
      .get<GETCharactersResponse>(`${this.endpoint}/?page=${pageNumber}${filtersQuery}`)
      .pipe(shareReplay(1));
  }
}
