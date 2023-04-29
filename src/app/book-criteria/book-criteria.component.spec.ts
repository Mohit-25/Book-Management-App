import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCriteriaComponent } from './book-criteria.component';

describe('BookCriteriaComponent', () => {
  let component: BookCriteriaComponent;
  let fixture: ComponentFixture<BookCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
