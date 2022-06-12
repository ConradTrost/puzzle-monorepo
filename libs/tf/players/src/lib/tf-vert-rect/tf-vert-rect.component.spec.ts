import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfVertRectComponent } from './tf-vert-rect.component';

describe('TfVertRectComponent', () => {
  let component: TfVertRectComponent;
  let fixture: ComponentFixture<TfVertRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TfVertRectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfVertRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
