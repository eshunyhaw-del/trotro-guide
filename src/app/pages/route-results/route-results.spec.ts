import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteResults } from './route-results';

describe('RouteResults', () => {
  let component: RouteResults;
  let fixture: ComponentFixture<RouteResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteResults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
