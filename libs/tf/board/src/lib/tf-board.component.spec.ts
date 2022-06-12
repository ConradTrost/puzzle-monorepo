import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfBoardComponent } from './tf-board.component';

describe('TfBoardComponent', () => {
  let component: TfBoardComponent;
  let fixture: ComponentFixture<TfBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TfBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
