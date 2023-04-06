import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBarComponent),
      multi: true,
    },
  ],
})
export class SearchBarComponent implements ControlValueAccessor {
  @Input() placeholder = 'Search...';
  @Input() label = 'Search';
  @Input() type = 'text';
  searchArgument: string | number = '';

  onInput(target: EventTarget | null): void {
    if (target instanceof HTMLInputElement) {
      this._onChange(target.value);
    }
  }

  onBlur(): void {
    this._onTouched();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onChange: (_: string | number) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onTouched: () => void = () => {};

  writeValue(value: string | number): void {
    this.searchArgument = value;
  }

  registerOnChange(fn: (_: string | number) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }
}
