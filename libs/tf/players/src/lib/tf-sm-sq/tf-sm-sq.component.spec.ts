import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfSmSqComponent } from './tf-sm-sq.component';

describe('TfSmSqComponent', () => {
  let component: TfSmSqComponent;
  let fixture: ComponentFixture<TfSmSqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TfSmSqComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfSmSqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
