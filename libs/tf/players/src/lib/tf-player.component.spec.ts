import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfPlayerComponent } from './tf-player.component';

describe('TfPlayerComponent', () => {
  let component: TfPlayerComponent;
  let fixture: ComponentFixture<TfPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TfPlayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TfPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
