import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDisplaydetailsComponent } from './book-displaydetails.component';

describe('BookDisplaydetailsComponent', () => {
  let component: BookDisplaydetailsComponent;
  let fixture: ComponentFixture<BookDisplaydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDisplaydetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDisplaydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
