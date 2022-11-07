import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMateriaComponent } from './cadastrar-materia.component';

describe('CadastrarMateriaComponent', () => {
  let component: CadastrarMateriaComponent;
  let fixture: ComponentFixture<CadastrarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
