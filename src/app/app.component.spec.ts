import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let appComponent: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CoreModule],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should create the appComponent', () => {
    expect(appComponent).toBeTruthy();
  });

  it('should display the app-main-layout component', () => {
    const appDebugEl: DebugElement = fixture.debugElement;
    const appMainLayoutComponent = appDebugEl.query(By.css('app-main-layout'));
    expect(appMainLayoutComponent).toBeTruthy();
  });
});
