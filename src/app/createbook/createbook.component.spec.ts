import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebookComponent } from './createbook.component';

describe('CreatebookComponent', () => {
  let component: CreatebookComponent;
  let fixture: ComponentFixture<CreatebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
