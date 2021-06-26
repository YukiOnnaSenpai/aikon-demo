import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukiComponent } from './suki.component';

describe('SukiComponent', () => {
  let component: SukiComponent;
  let fixture: ComponentFixture<SukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
