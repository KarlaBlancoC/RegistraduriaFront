import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmopcionesComponent } from './admopciones.component';

describe('AdmopcionesComponent', () => {
  let component: AdmopcionesComponent;
  let fixture: ComponentFixture<AdmopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmopcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
