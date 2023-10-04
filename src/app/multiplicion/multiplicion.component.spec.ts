import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicionComponent } from './multiplicion.component';

describe('MultiplicionComponent', () => {
  let component: MultiplicionComponent;
  let fixture: ComponentFixture<MultiplicionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicionComponent]
    });
    fixture = TestBed.createComponent(MultiplicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
