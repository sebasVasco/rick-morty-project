import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CharacterService } from '@app/core/services/character/character.service';
import { GETCharactersResponse } from '@app/core/schemas/response.schema';
import { CharacterSchema } from '@app/core/schemas/character.schema';
import { CharacterFilters } from '../../components/character-filter/character-filter.model';
import { MatPaginator } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  characters$!: Observable<CharacterSchema[]>;
  length = 0;
  pageSize = 20;
  filters!: CharacterFilters;
  errorRequest: HttpErrorResponse | null = null;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterRequest(1);
  }

  displayFilters(event: CharacterFilters): void {
    this.filters = event;
    this.matPaginator.firstPage();
    this.characterRequest(1, event);
  }

  trackById(index: number, character: CharacterSchema): number {
    return character.id;
  }

  characterRequest(page: number, filters?: CharacterFilters | null | undefined): void {
    this.characters$ = this.characterService.getCharacters(page, filters).pipe(
      tap((res: GETCharactersResponse) => {
        this.length = res.info.count;
      }),
      map((res: GETCharactersResponse) => res.results),
      catchError((err: HttpErrorResponse) => {
        this.errorRequest = err;
        throw err;
      })
    );
  }

  changePage(page: number): void {
    this.characterRequest(page + 1, this.filters);
  }
}
