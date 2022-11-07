import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarMateriaComponent } from './deletar-materia.component';

describe('DeletarMateriaComponent', () => {
  let component: DeletarMateriaComponent;
  let fixture: ComponentFixture<DeletarMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarMateriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
