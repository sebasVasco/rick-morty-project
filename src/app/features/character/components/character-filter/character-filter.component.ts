import { Component, OnInit, OnDestroy, Output, EventEmitter, HostBinding } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CharacterFilters, CharacterGenders, CharacterStatus } from './character-filter.model';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss'],
})
export class CharacterFilterComponent implements OnInit, OnDestroy {
  @Output() readonly getFilters = new EventEmitter<CharacterFilters>();
  @HostBinding('class.search-bar-w') width = true;
  filterTextSubject$ = new Subject<string | number>();
  filterTextSubscription$!: Subscription;
  characterFilters: CharacterFilters = {
    name: '',
    status: null,
    gender: null,
  };
  debounceValue = 1000;

  ngOnInit(): void {
    this.debounceFilters();
  }

  debounceFilters(): void {
    this.filterTextSubscription$ = this.filterTextSubject$
      .pipe(debounceTime(this.debounceValue), distinctUntilChanged())
      .subscribe(() => this.getFilters.emit(this.characterFilters));
  }

  changeChipOptionsFilters(
    value: CharacterStatus | CharacterGenders,
    prop: 'status' | 'gender'
  ): void {
    this.characterFilters = { ...this.characterFilters, [prop]: value };
    this.getFilters.emit(this.characterFilters);
  }

  clearFilters(): void {
    this.characterFilters = {
      name: '',
      status: null,
      gender: null,
    };
    this.getFilters.emit(this.characterFilters);
  }

  ngOnDestroy(): void {
    if (this.filterTextSubscription$) {
      this.filterTextSubscription$.unsubscribe();
    }
  }
}
