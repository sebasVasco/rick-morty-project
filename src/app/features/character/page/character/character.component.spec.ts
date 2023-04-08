import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@app/shared/shared.module';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

import { CharacterComponent } from './character.component';
import { CharacterFilterComponent } from '../../components/character-filter/character-filter.component';
import { CharacterService } from '@app/core/services/character/character.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterCardComponent, CharacterComponent, CharacterFilterComponent],
      imports: [BrowserAnimationsModule, SharedModule, HttpClientTestingModule],
      providers: [CharacterService],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the filters and make a request', () => {
    spyOn(component, 'characterRequest');
    const mockFilters = { name: 'test' };
    component.displayFilters(mockFilters);
    expect(component.filters).toEqual(mockFilters);
    expect(component.characterRequest).toHaveBeenCalled();
  });

  it('should track a character', () => {
    const mockCharacter = {
      id: 1,
      name: 'test',
      status: 'test',
      species: 'test',
      type: 'test',
      gender: 'test',
      origin: { name: 'test', url: 'test' },
      location: { name: 'test', url: 'test' },
      image: 'test',
      episode: [],
      url: 'test',
      created: 'test',
    };
    const characterId = component.trackById(1, mockCharacter);
    expect(characterId).toBe(1);
  });

  it('should change page and make request', () => {
    spyOn(component, 'characterRequest');
    component.changePage(1);
    expect(component.characterRequest).toHaveBeenCalled();
  });
});
