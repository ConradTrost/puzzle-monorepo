import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfHorizRectComponent } from './tf-horiz-rect.component';

describe('TfHorizRectComponent', () => {
  let component: TfHorizRectComponent;
  let fixture: ComponentFixture<TfHorizRectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TfHorizRectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfHorizRectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
