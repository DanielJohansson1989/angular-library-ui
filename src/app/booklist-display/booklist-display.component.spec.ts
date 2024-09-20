import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistDisplayComponent } from './booklist-display.component';

describe('BooklistDisplayComponent', () => {
  let component: BooklistDisplayComponent;
  let fixture: ComponentFixture<BooklistDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooklistDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooklistDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
