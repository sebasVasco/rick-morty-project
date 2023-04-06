import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterFilterComponent } from './character-filter.component';
import { SharedModule } from '@app/shared/shared.module';
import { By } from '@angular/platform-browser';
import { CharacterFilters } from './character-filter.model';

describe('CharacterFilterComponent', () => {
  let component: CharacterFilterComponent;
  let fixture: ComponentFixture<CharacterFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterFilterComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce filter on initialization', () => {
    spyOn(component, 'debounceFilters');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.debounceFilters).toHaveBeenCalled();
  });

  it('should change chip options', () => {
    const mockFilters: CharacterFilters = {
      name: '',
      status: 'alive',
      gender: null,
    };
    component.changeChipOptionsFilters('alive', 'status');
    expect(component.characterFilters).toEqual(mockFilters);
  });

  it('should clear filters', () => {
    const resetFilters = {
      name: '',
      status: null,
      gender: null,
    };
    component.clearFilters();
    expect(component.characterFilters).toEqual(resetFilters);
  });
});
