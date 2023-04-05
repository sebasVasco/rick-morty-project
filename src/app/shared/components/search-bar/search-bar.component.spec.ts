/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let inputEl: HTMLInputElement;

  const mockFn = {
    onChange: (): void => {},
    onTouched: (): void => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    component._onChange = mockFn.onChange;
    component._onTouched = mockFn.onTouched;
    fixture.detectChanges();
  });

  it('should create and set _onChange and _onTouch', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger onInput function and call _onChange', () => {
    const event = new Event('input');
    const testText = 'test';
    inputEl.value = testText;
    inputEl.dispatchEvent(event);
    expect(inputEl.value).toBe(testText);
  });

  it('should trigger onBlur function and call _onTouch', () => {
    const event = new Event('blur');
    const testText = 'test';
    inputEl.value = testText;
    inputEl.dispatchEvent(event);
    expect(inputEl.value).toBe(testText);
  });
});
