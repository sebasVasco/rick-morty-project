import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CharacterFilters } from './character-filter.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.scss'],
})
export class CharacterFilterComponent implements OnInit, OnDestroy {
  @Output() readonly getFilters = new EventEmitter<CharacterFilters>();
  filterTextSubscription$!: Subscription;
  characterFilters = this.fb.group<CharacterFilters>({
    name: '',
    status: null,
    gender: null,
  });
  debounceValue = 1000;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.debounceFilters();
  }

  debounceFilters(): void {
    this.filterTextSubscription$ = this.characterFilters.valueChanges
      .pipe(debounceTime(this.debounceValue), distinctUntilChanged())
      .subscribe(() => this.getFilters.emit(this.characterFilters.value));
  }

  clearFilters(): void {
    this.characterFilters.reset({
      name: '',
      status: null,
      gender: null,
    });
    this.getFilters.emit(this.characterFilters.value);
  }

  ngOnDestroy(): void {
    if (this.filterTextSubscription$) {
      this.filterTextSubscription$.unsubscribe();
    }
  }
}
