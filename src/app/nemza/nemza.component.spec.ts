import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NemzaComponent } from './nemza.component';

describe('NemzaComponent', () => {
  let component: NemzaComponent;
  let fixture: ComponentFixture<NemzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NemzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NemzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
