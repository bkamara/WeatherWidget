import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWeatherComponent } from './default-weather.component';

describe('DefaultWeatherComponent', () => {
  let component: DefaultWeatherComponent;
  let fixture: ComponentFixture<DefaultWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
