import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnortijaComponent } from './snortija.component';

describe('SnortijaComponent', () => {
  let component: SnortijaComponent;
  let fixture: ComponentFixture<SnortijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnortijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnortijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
