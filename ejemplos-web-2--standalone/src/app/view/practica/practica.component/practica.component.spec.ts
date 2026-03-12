import { ComponentFixture, TestBed } from '@angular/core/testing';

import { practicaComponent } from './practica.component';

describe('PracticaComponent', () => {
  let component: practicaComponent;
  let fixture: ComponentFixture<practicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [practicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(practicaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
