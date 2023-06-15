import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieIMDBComponent } from './movie-imdb.component';

describe('MovieIMDBComponent', () => {
  let component: MovieIMDBComponent;
  let fixture: ComponentFixture<MovieIMDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieIMDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieIMDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
