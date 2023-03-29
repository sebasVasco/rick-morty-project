import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { RoutingLoadingBarComponent } from './routing-loading-bar.component';

describe('RoutingLoadingBarComponent', () => {
  let component: RoutingLoadingBarComponent;
  let fixture: ComponentFixture<RoutingLoadingBarComponent>;

  const eventSubject = new ReplaySubject<RouterEvent | unknown>(1);

  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
    events: eventSubject.asObservable(),
    url: 'mock/url',
  };

  const navigationTrigger = 'imperative';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingLoadingBarComponent],
      imports: [MatProgressBarModule],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();
    fixture = TestBed.createComponent(RoutingLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading to true when navigation starts', () => {
    eventSubject.next(new NavigationStart(0, '', navigationTrigger));
    fixture.detectChanges();
    expect(component.loading).toBeTrue();
  });

  it('should set loading to false when either navigation ends|cancels|errors', () => {
    eventSubject.next(new NavigationEnd(1, '', navigationTrigger));
    fixture.detectChanges();
    expect(component.loading).toBeFalse();
  });

  it('should break when no navigation event is passed', () => {
    eventSubject.next({});
    fixture.detectChanges();
    expect(component.loading).toBeFalse();
  });
});
