import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfLgSqComponent } from './tf-lg-sq.component';

describe('TfLgSqComponent', () => {
  let component: TfLgSqComponent;
  let fixture: ComponentFixture<TfLgSqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TfLgSqComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfLgSqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
