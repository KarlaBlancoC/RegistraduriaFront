import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuradoOpcionesComponent } from './jurado-opciones.component';

describe('JuradoOpcionesComponent', () => {
  let component: JuradoOpcionesComponent;
  let fixture: ComponentFixture<JuradoOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuradoOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuradoOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
