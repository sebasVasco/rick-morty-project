import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CharacterFilterComponent } from './character-filter.component';
import { SharedModule } from '@app/shared/shared.module';

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

  it('should clear filters', () => {
    const resetFilters = {
      name: '',
      status: null,
      gender: null,
    };
    component.clearFilters();
    expect(component.characterFilters.value).toEqual(resetFilters);
  });
});
